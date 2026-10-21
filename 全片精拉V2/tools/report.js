const D=window.FILM_DATA,A=D.annotation,C=D.coverage;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=s=>document.querySelector(s);
function tc(t){const n=Math.round(t*1000),h=Math.floor(n/3600000),m=Math.floor(n/60000)%60,s=Math.floor(n/1000)%60;return(h?String(h).padStart(2,'0')+':':'')+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')+'.'+String(n%1000).padStart(3,'0')}
$('#verdict').textContent=A.verdict;
$('#stats').innerHTML=[[tc(D.meta.duration),'原片画面时长'],[C.shot_candidates,'全程候选镜头'],[C.annotation_segments,'全程分段标注'],[C.events,'重点细拆窗口']].map(x=>`<div class="stat"><b>${x[0]}</b><small>${x[1]}</small></div>`).join('');
$('#coverage').innerHTML=`<p>图像时间轴：0 → ${tc(D.meta.duration)}，连续建立证据 <b>100%</b>。</p><p>分段标注覆盖：<b>${(C.annotated_time_coverage*100).toFixed(1)}%</b>，指段落文本没有时间空洞，不等于每秒人工观看。${(A.shot_overrides||[]).length}处另有镜头级区间观察；范围与依据见镜头卡。</p><p>核验：${C.validation_errors.length?'发现 '+C.validation_errors.length+' 项错误':'边界连续、时间递增、抽帧区间和图片存在性通过'}。字幕 ${C.srt_segments}段，重叠 ${C.srt_overlaps}处；${C.source_srt_exists?'自动稿已读取，未逐字听校。':'全文字幕尚未齐全，语义核验未完成。'}</p>${A.semantic_complete===false?'<p class="warning">本片全文语义尚未核验；后半不能称已完成精拉。已处理范围请见各段文字。</p>':''}${D.asr_quality?.suspect_count?`<p class="warning">自动转写检测到${D.asr_quality.suspect_count}个疑似重复／识别异常段，已阻止作为镜头语义证据。见画面原字幕，不以重复ASR推测节奏。</p>`:''}<p class="muted">${esc(D.provenance)}</p>`;
$('#source').innerHTML=D.item.url?`<a href="${esc(D.item.url)}" target="_blank" rel="noreferrer">观看参考原片</a>`:'用户自剪素材，仅本地学习；完整视频不上传。';
if(A.source_verification){const sourceNote=document.createElement('p');sourceNote.textContent=A.source_verification;$('#source').after(sourceNote)}
$('#reviewed').innerHTML=(A.reviewed_visual_sources||[]).map(x=>`<li>${esc(x)}</li>`).join('');
const bins=[];for(let s=0;s<D.meta.duration;s+=30){const end=Math.min(s+30,D.meta.duration);bins.push({s,end,n:D.shots.filter(x=>x.start>0&&x.start>=s&&x.start<end).length})}
const max=Math.max(1,...bins.map(x=>x.n));
$('#pace').innerHTML=`<svg role="img" aria-label="全时长候选切点密度" viewBox="0 0 1100 230"><line x1="30" y1="192" x2="1070" y2="192" stroke="#52656f"/>${bins.map((x,i)=>`<rect x="${30+i*1040/bins.length}" y="${192-160*x.n/max}" width="${Math.max(1,1040/bins.length-2)}" height="${160*x.n/max}" fill="#7be0c9"><title>${tc(x.s)}–${tc(x.end)}：${x.n}个候选切点</title></rect>`).join('')}<text x="30" y="219" fill="#aac0c9">00:00</text><text x="970" y="219" fill="#aac0c9">${tc(D.meta.duration)}</text></svg>`;
if(D.audio?.windows?.length){
  const stride=Math.max(1,Math.ceil(D.audio.windows.length/1200)),w=D.audio.windows.filter((x,i)=>i%stride===0&&x.time<D.meta.duration);
  const pts=w.map(x=>`${30+1040*x.time/D.meta.duration},${192-160*Math.max(0,Math.min(1,(x.dbfs+60)/60))}`).join(' ');
  $('#audiochart').innerHTML=`<svg role="img" aria-label="实际混合音轨每秒RMS能量" viewBox="0 0 1100 230"><text x="30" y="22" fill="#ffd086">0 dBFS</text><text x="30" y="190" fill="#aac0c9">−60 dBFS</text><polyline points="${pts}" fill="none" stroke="#ffd086" stroke-width="1.5"/><text x="30" y="219" fill="#aac0c9">00:00</text><text x="970" y="219" fill="#aac0c9">${tc(D.meta.duration)}</text></svg><p>已测量${D.audio.windows.length}个1秒窗口。人声＋音乐＋音效的总能量，不是分离后的音乐音量，也不是响度LUFS；曲线低谷不能直接断言“音乐抽走”。</p>`;
}else $('#audiochart').textContent='音量测量尚未完成。不补写想象的音乐情绪曲线。';
const fields=[['content','内容结构／判断'],['visual','画面／样本观察'],['cut_logic','切镜逻辑／判断'],['flower','花字与信息层级'],['broll','B-roll／素材任务'],['audio','声音核验状态'],['reproduce','具体复现／整改']];
$('#segments').innerHTML=(A.segments||[]).map((x,i)=>`<article class="segment" id="seg${i}"><p class="annotation-time">${tc(x.start)} → ${tc(x.end)}</p><h3>${esc(x.title)}</h3><dl>${fields.map(([k,l])=>`<dt>${l}</dt><dd>${esc(x[k]||'尚未标注，不作结论')}</dd>`).join('')}</dl><button data-jump="${x.start}">查看对应镜头</button></article>`).join('')||'<p class="warning">人工分段复核尚未完成，不是已完成的精拉。</p>';
$('#events').innerHTML=(A.events||[]).map(x=>`<article class="event"><p class="annotation-time">${tc(x.start)} → ${tc(x.end)} · ${esc(x.category||'重点')}</p><h3>${esc(x.title)}</h3><p><span class="tag">画面观察</span> ${esc(x.observed)}</p><p><span class="tag">分析推断</span> ${esc(x.inference)}</p><p><span class="tag">具体复现</span> ${esc(x.reproduce)}</p><div class="gallery">${(x.pages||[]).map(p=>`<a href="${encodeURI(p)}" target="_blank"><img class="zoom" loading="lazy" src="${encodeURI(p)}" alt="${esc(x.title)} ${tc(x.start)}起的时间序列实帧"></a>`).join('')}</div></article>`).join('');
$('#comparisons').innerHTML=(A.comparisons||[]).map(x=>`<article class="box"><h3>${esc(x.title)}</h3><p>${esc(x.learn)}</p><img class="zoom" loading="lazy" src="${encodeURI(x.image)}" alt="左侧用户成片，右侧标杆真实截图对照"><p class="muted">${esc(x.avoid)}</p><a href="../${esc(x.reference_id)}/全片精拉报告.html">查看该标杆全片分析</a></article>`).join('');
if(!(A.comparisons||[]).length)$('#compare').hidden=true;
$('#pitfalls').innerHTML=(A.pitfalls||[]).length?'<div class="box"><h3>容易学错的地方／当前问题</h3><ul>'+A.pitfalls.map(x=>`<li>${esc(x)}</li>`).join('')+'</ul></div>':'';
$('#drills').innerHTML=(A.drills||[]).length?'<div class="box"><h3>逐步练习／具体整改</h3><ol>'+A.drills.map(x=>`<li>${esc(x)}</li>`).join('')+'</ol></div>':'';
$('#minute').innerHTML='<option value="all">全片，不限前60秒</option>'+Array.from({length:Math.ceil(D.meta.duration/60)},(_,i)=>`<option value="${i}">${tc(i*60)}起的1分钟</option>`).join('');
let page=0,filtered=D.shots;
function filter(){const q=$('#search').value.trim().toLowerCase(),m=$('#minute').value,l=$('#length').value;filtered=D.shots.filter(x=>(m==='all'||x.end>Number(m)*60&&x.start<(Number(m)+1)*60)&&(l==='all'||l==='short'&&x.duration<1||l==='long'&&x.duration>10)&&(!q||(x.dialogue+' '+x.segment_ids.map(i=>JSON.stringify(A.segments[i])).join(' ')+' '+x.override_ids.map(i=>JSON.stringify(A.shot_overrides[i])).join(' ')).toLowerCase().includes(q)));page=0;render()}
function render(){
  const maxp=Math.max(1,Math.ceil(filtered.length/24));page=Math.max(0,Math.min(page,maxp-1));$('#pageinfo').textContent=`共${filtered.length}个候选 · 第${page+1}/${maxp}页；分页只是加载方式，后半片未删除。`;
  $('#shotlist').innerHTML=filtered.slice(page*24,(page+1)*24).map(x=>{
    const overrides=x.override_ids.map(i=>A.shot_overrides[i]);
    const exact=overrides.map(o=>`<div class="box"><p class="annotation-time">人工区间样本 ${tc(o.start)}–${tc(o.end)}</p><p><span class="tag">画面</span> ${esc(o.visual)}</p><p><span class="tag">切镜解释</span> ${esc(o.cut_logic)}</p><p>花字：${esc(o.flower)}；素材：${esc(o.broll)}</p><small>证据：${esc(o.evidence)}。区间跨多个候选时，不宣称整个区间是一刀。</small></div>`).join('');
    return `<article class="shot" id="shot${x.number}"><h3>S${String(x.number).padStart(5,'0')} · ${tc(x.start)} → ${tc(x.end)} · ${x.duration.toFixed(3)}秒</h3><p><span class="tag">${esc(x.evidence)}</span></p><img class="zoom" loading="lazy" src="${encodeURI(x.image)}" alt="候选镜头${x.number}入中出三时点实帧"><p class="transcript"><small>同步原始ASR（未听校）</small>${esc(x.dialogue||'无可靠对应转写：可能是停顿、纯视觉或识别缺失。')}</p>${x.audio_dbfs!==null?`<small>这一候选内混合音轨平均窗口RMS：${x.audio_dbfs.toFixed(1)} dBFS，不代表音乐单独音量。</small>`:''}${exact||'<p class="muted">本刀尚无独立人工确认；只能查看实帧，不以继承段落文本冒充逐刀结论。</p>'}<details><summary>所在段落分析</summary>${x.segment_ids.map(i=>`<p><a href="#seg${i}">${esc(A.segments[i].title)}</a>：${esc(A.segments[i].cut_logic)}</p><p>复现：${esc(A.segments[i].reproduce)}</p>`).join('')||'<p>尚未人工标注。</p>'}</details></article>`;
  }).join('');
  for(const id of ['previous','previous2'])$('#'+id).disabled=page===0;for(const id of ['next','next2'])$('#'+id).disabled=page===maxp-1;wireZoom();
}
for(const id of ['search','minute','length'])$('#'+id).addEventListener(id==='search'?'input':'change',filter);
for(const id of ['previous','previous2'])$('#'+id).onclick=()=>{page--;render();$('#shots').scrollIntoView()};for(const id of ['next','next2'])$('#'+id).onclick=()=>{page++;render();$('#shots').scrollIntoView()};
$('#last').onclick=()=>{$('#minute').value='all';$('#search').value='';$('#length').value='all';filter();page=Math.ceil(filtered.length/24)-1;render();$('#shots').scrollIntoView()};
document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{$('#minute').value='all';$('#search').value='';$('#length').value='all';filter();page=Math.floor(Math.max(0,filtered.findIndex(x=>x.end>Number(b.dataset.jump)))/24);render();$('#shots').scrollIntoView()});
function wireZoom(){document.querySelectorAll('img.zoom').forEach(im=>im.onclick=e=>{e.preventDefault();$('#large').src=im.src;$('#zoom').showModal()})}$('#closezoom').onclick=()=>$('#zoom').close();$('#zoom').onclick=e=>{if(e.target===$('#zoom'))$('#zoom').close()};filter();
document.querySelector('nav a[href="#flower"]').textContent='重点时序截图';
document.querySelector('nav a[href="#shots"]').textContent='全片候选镜头';
document.querySelector('#flower p.muted').textContent='每处前2秒约0.12秒/帧，之后每秒截图并含尾帧；图板标签是请求抽帧时间，可能取到相邻源帧。精确起帧来自另注明的连续帧核验，不由间隔图板猜。不是源帧穷尽，不能据此猜动画预设、音效或曲名。';
document.querySelector('#coverage p').innerHTML='候选区间时间轴：0 → '+tc(D.meta.duration)+'，覆盖100%；每区间仅入／中／出3时点实帧，不是全部源帧或每秒人工观看。';
if(D.asr_quality?.suspect_count){const ws=document.querySelectorAll('#coverage .warning');ws[ws.length-1].textContent='有'+D.asr_quality.suspect_count+'段自动稿未采用：疑似重复、歌词或碎片对白。以画面原文字与实际听核为准，不作为镜头语义证据。'}
document.querySelectorAll('#events .event').forEach((el,i)=>{const note=document.createElement('p');note.className='muted';note.textContent='采样：'+A.events[i].sample_step_seconds;el.querySelector('.gallery').before(note)});
if(D.srt_status?.partial_file_used){const note=document.createElement('p');note.className='warning';note.textContent='仅使用部分自动稿：0 → '+tc(D.srt_status.covered_until)+'。此后对白/语义仍待处理，不把部分SRT当全文。';$('#coverage').append(note)}
document.querySelectorAll('#comparisons img').forEach(im=>{im.width=1280;im.height=442;im.style.width='100%';im.loading='eager'});
$('#search').placeholder='搜索对白／画面／花字／段落';
const wrap=document.createElement('style');wrap.textContent='.shot,.segment,.event,.box{overflow-wrap:anywhere}';document.head.append(wrap);

if(D.public_edition){document.querySelectorAll('.transcript').forEach(el=>el.hidden=true);const n=document.createElement('p');n.className='muted';n.textContent='公开学习版仅提供分析与必要实帧，不发布原始全文转写、音视频或本机路径。';document.getElementById('scope').append(n)}
