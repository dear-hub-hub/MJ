const questions = [
  { q: '오랜만에 만난 친구가 나를 보더니 말합니다.', quote: '“너 요즘 좀 피곤해 보여.”', a: [['“맞아, 오늘 좀 피곤해.” 그걸로 끝입니다.',5],['집에 돌아와 거울을 봅니다. 정말 안 좋아 보이는 것 같습니다.',1],['조금 신경 쓰이지만 요즘 잠을 못 잔 탓이라고 생각합니다.',3],['“그래 보여?” 하고 넘겼는데 그날 몇 번 더 생각납니다.',2],['친구 눈에는 그렇게 보였나 보다 하고 지나갑니다.',4]] },
  { q: '열심히 준비한 일을 보여줬는데 이런 말을 들었습니다.', quote: '“음… 나는 그냥 그런데?”', a: [['어떤 부분이 별로였는지 물어보고 참고할 것만 참고합니다.',4],['순간 마음이 철렁합니다. 괜히 보여줬다는 생각까지 듭니다.',1],['그럴 수 있다고 생각합니다. 모든 사람이 좋아할 수는 없으니까요.',5],['왜 별로였는지 알고 싶습니다. 이유를 들으면 꽤 오래 생각할 것 같습니다.',2],['기분은 조금 상하지만 다른 사람의 의견도 들어보고 싶습니다.',3]] },
  { q: '누군가 오늘따라 계속 말합니다.', quote: '“오늘 진짜 예쁜데?”', a: [['“진짜? 고마워.” 하고 기분 좋게 받습니다.',4],['“뭐야, 오늘 왜 그래?”부터 나옵니다.',2],['“그치?” 하고 웃습니다. 좋은 말은 굳이 반박하지 않습니다.',5],['민망해서 “아니야”라고 합니다. 사실 별로 안 예쁜 것 같습니다.',1],['기분은 좋지만 정말 그런가 싶어 거울을 한번 봅니다.',3]] },
  { q: 'SNS에 마음에 드는 사진을 올렸는데 평소보다 반응이 적습니다.', quote: '', a: [['오늘은 반응이 적네, 정도로 생각합니다.',4],['사진이 별로였나 싶어 계속 확인하다가 지우고 싶어집니다.',1],['별생각 없습니다. 제가 마음에 들어서 올린 사진이니까요.',5],['살짝 신경 쓰이지만 조금 지나면 잊습니다.',3],['사람들이 별로라고 생각하나 싶어 사진을 다시 봅니다.',2]] },
  { q: '친한 사람이 말다툼 중에 말합니다.', quote: '“너는 가끔 너무 이기적인 것 같아.”', a: [['마음에는 걸리지만 어떤 행동 때문에 그렇게 느꼈는지 생각해봅니다.',3],['그 사람이 그렇게 느꼈다는 건 알겠지만, 그 한마디로 저를 규정하지는 않습니다.',5],['예전에 제가 이기적으로 행동했던 순간들이 줄줄이 떠오릅니다.',1],['왜 그렇게 느꼈는지 물어보고 납득되는 부분만 받아들입니다.',4],['혹시 정말 그런 사람인가 싶어 며칠 동안 생각합니다.',2]] },
  { q: '다이어트 후 주변에서 계속 “예뻐졌다”고 했는데 한 사람이 말합니다.', quote: '“살을 빼서 그런가? 얼굴은 좀 주름져 보이는데?”', a: [['순간 신경 쓰이지만 그동안 들었던 좋은 말도 함께 떠올려봅니다.',3],['“그렇게 보일 수도 있지.” 그 사람의 감상으로 남겨둡니다.',5],['거울도 보고 예전 사진도 찾아봅니다. 그 말이 계속 신경 쓰입니다.',2],['정말 그런지 객관적으로 한번 확인해보고 아니면 넘깁니다.',4],['그날부터 주름만 보입니다. 괜히 살을 뺐나 싶습니다.',1]] },
  { q: '내가 실수했는데 누군가 꽤 날카롭게 지적했습니다.', quote: '', a: [['실수는 실수고 저는 저입니다. 고치면 끝이라고 생각합니다.',5],['집에 와서도 그 장면을 여러 번 다시 떠올립니다.',2],['고칠 부분은 고치고, 기분 나쁜 말투까지 가져오지는 않습니다.',4],['실수 자체보다 그 사람의 표정과 말투가 계속 기억납니다.',1],['기분은 나쁘지만 제가 실수한 부분과 상대의 말투를 따로 생각합니다.',3]] },
  { q: '누군가 나를 다른 사람에게 이렇게 소개합니다.', quote: '“이 사람 진짜 성실해요.”', a: [['내가 어떤 모습을 보여서 그렇게 생각했는지 궁금합니다.',3],['“맞아요. 저 꽤 성실해요.” 좋은 평가도 제 모습 중 하나라고 생각합니다.',5],['속으로 ‘나 그렇게 성실하지 않은데…’부터 생각합니다.',1],['기분 좋게 받아들입니다. 제가 실제로 노력한 부분도 있으니까요.',4],['좋기는 한데 괜히 기대를 못 맞출까 부담스럽습니다.',2]] },
  { q: '자기 전에 갑자기 낮에 들었던 기분 나쁜 말이 떠올랐습니다.', quote: '', a: [['또 생각났네 싶지만 다른 생각을 하다 보면 잠듭니다.',3],['이미 끝난 일이라면 굳이 다시 꺼내지 않습니다.',5],['처음부터 끝까지 다시 재생합니다. 잠들기까지 시간이 좀 걸릴 것 같습니다.',1],['지금 생각한다고 달라질 일이 없으면 내일 생각하기로 합니다.',4],['왜 그런 말을 했는지 이런저런 이유를 생각합니다.',2]] },
  { q: '누군가 나에 대해 좋지 않은 평가를 했다는 이야기를 전해 들었습니다.', quote: '', a: [['이유가 타당한지 확인할 수 있으면 확인하고, 아니면 흘려보냅니다.',4],['정확히 무슨 말을 했는지부터 알고 싶습니다. 모르면 더 신경 쓰입니다.',1],['조금 신경 쓰이지만 그 사람이 나를 얼마나 아는지도 생각해봅니다.',3],['“그럴 수도 있죠.” 저를 좋아하지 않는 사람도 있을 수 있다고 생각합니다.',5],['왜 그런 말을 했는지 계속 생각하게 됩니다.',2]] }
];

const results = [
  { max:18, symbol:'🍪', name:'쿠크다스', line:'건드리면 와사삭.', sub:'“그 말 아직도 생각나요.”', copy:'당신은 다른 사람의 말에 담긴 온도까지 기억하는 사람입니다.\n\n무슨 말을 했는지만큼 어떤 표정으로 말했는지, 그 순간 내가 어떤 기분이었는지도 함께 남습니다. 덕분에 다른 사람이 무심코 지나친 감정을 먼저 알아차리는 경우도 많습니다.\n\n다만 남의 말에 대한 기억력이 너무 성실합니다.', ask:'“이 말에도 제가 칭찬에 요구했던 만큼의 증거가 있나요?”' },
  { max:26, symbol:'◯', name:'유리볼', line:'단단해 보여도 충격은 금이 되어 남습니다.', sub:'“괜찮은 줄 알았는데, 그 말이 자꾸 번져요.”', copy:'당신은 쿠크다스처럼 작은 말에 바로 부서지지는 않습니다. 웬만한 이야기는 차분히 받아들이고, 가벼운 말은 흘려보낼 힘도 있습니다.\n\n하지만 예상하지 못한 비난이나 가까운 사람의 날카로운 말처럼 큰 충격을 받으면 마음에 금이 가기 쉽습니다. 겉으로는 괜찮아 보여도 그 흔적을 오래 들여다보곤 합니다.\n\n유리는 약하기만 한 재료가 아닙니다. 금이 간 지점을 알아차리면 더 조심스럽게 다루고, 필요한 거리를 정할 수 있습니다.', ask:'“이 말은 사실일까요, 아니면 순간의 충격이 만든 금일까요?”' },
  { max:34, symbol:'🫧', name:'에어캡', line:'충격은 받지만 어느 정도 흡수합니다.', sub:'“기분 나쁘긴 한데 괜찮아요.”', copy:'당신도 당연히 상처를 받습니다. 듣기 싫은 말을 들으면 기분이 상하고 때로는 다시 생각하기도 합니다.\n\n그래도 시간이 지나면 ‘기분 나빴던 말’과 ‘생각해볼 만한 내용’을 어느 정도 분리할 수 있습니다. 마음 안에 약간의 완충 공간이 있는 사람입니다.', ask:'“아프긴 했는데, 그게 전부는 아니니까요.”' },
  { max:42, symbol:'🪞', name:'청동거울', line:'웬만한 말에는 놀라지도 않습니다.', sub:'“그건 그쪽 생각이고요.”', copy:'당신은 다른 사람의 평가와 자기평가 사이에 제법 분명한 경계가 있습니다.\n\n누군가 나를 좋게 봐주면 기분 좋게 받아들이고, 좋지 않게 봤다면 왜 그렇게 생각했는지 한번 들여다봅니다. 그리고 돌려줄 것은 돌려줍니다.\n\n다만 너무 빨리 반사해버리면 필요한 조언까지 놓칠 수 있습니다.', ask:'“혹시 이번 말에는 제가 볼 만한 것도 있었나요?”' },
  { max:50, symbol:'🗿', name:'돌하르방', line:'비바람을 맞아도 그 자리에 있습니다.', sub:'“말씀은 잘 들었습니다.”', copy:'당신은 타인의 평가 때문에 자기 자신에 대한 생각을 쉽게 바꾸지 않습니다.\n\n누군가 좋아한다고 해서 갑자기 내가 대단한 사람이 되는 것도 아니고, 누군가 싫어한다고 해서 내가 형편없는 사람이 되는 것도 아니라고 생각합니다. 칭찬은 고맙게 받고, 비판은 필요하면 참고합니다.\n\n다만 너무 단단한 마음은 가끔 ‘흔들리지 않는 것’과 ‘듣지 않는 것’을 헷갈릴 수 있습니다.', ask:'“말씀은 잘 들었습니다. 이제 제가 판단하겠습니다.”' }
];

const quiz = document.querySelector('#quiz');
const content = document.querySelector('#quiz-content');
let current = 0;
let answers = Array(questions.length).fill(null);

function renderQuestion(){
  const item = questions[current];
  const letters = ['A','B','C','D','E'];
  content.innerHTML = `<div class="quiz-stage"><div class="quiz-progress"><div class="progress-track"><i style="width:${(current+1)*10}%"></i></div><span>${String(current+1).padStart(2,'0')} / 10</span></div><p class="quiz-kicker">YOUR HEART MATERIAL</p><h2 class="quiz-question">${item.q}${item.quote ? `<br><em>${item.quote}</em>` : ''}</h2><div class="choices">${item.a.map((answer,index)=>`<button class="choice ${answers[current]===answer[1]?'selected':''}" data-score="${answer[1]}"><b>${letters[index]}</b><span>${answer[0]}</span></button>`).join('')}</div><div class="quiz-nav"><button id="prev" ${current===0?'disabled':''}>← 이전 질문</button><button id="quit">이야기로 돌아가기</button></div></div>`;
  content.querySelectorAll('.choice').forEach(button=>button.addEventListener('click',()=>{ answers[current]=Number(button.dataset.score); button.classList.add('selected'); setTimeout(()=>{ current += 1; current < questions.length ? renderQuestion() : renderResult(); },180); }));
  content.querySelector('#prev').addEventListener('click',()=>{ if(current>0){ current-=1; renderQuestion(); } });
  content.querySelector('#quit').addEventListener('click',closeQuiz);
  content.querySelector('.choice')?.focus({preventScroll:true});
}

function renderResult(){
  const total = answers.reduce((sum,value)=>sum+value,0);
  const result = results.find(item=>total<=item.max);
  content.innerHTML = `<div class="result-wrap"><p class="result-label">YOUR HEART MATERIAL</p><article class="result-card"><span class="result-symbol" aria-hidden="true">${result.symbol}</span><p class="quiz-kicker">${result.line}</p><h2 class="result-name">${result.name}</h2><p class="result-tagline">${result.sub}</p><p class="result-copy">${result.copy}</p><p class="result-question">${result.ask}</p></article><div class="result-actions"><button class="primary" id="share-result">친구에게 공유하기</button><button id="restart">다시 해보기</button><button id="back-article">← 이야기 다시 읽기</button></div></div>`;
  content.querySelector('#restart').addEventListener('click',()=>{ current=0; answers.fill(null); renderQuestion(); });
  content.querySelector('#back-article').addEventListener('click',closeQuiz);
  content.querySelector('#share-result').addEventListener('click',async(event)=>{ const text=`내 마음의 재질은 ${result.name}! ${result.sub}`; try{ if(navigator.share){ await navigator.share({title:'내 마음의 재질',text,url:location.href}); } else { await navigator.clipboard.writeText(`${text}\n${location.href}`); event.currentTarget.textContent='링크를 복사했어요'; } }catch(error){ if(error.name!=='AbortError') event.currentTarget.textContent='공유하지 못했어요'; } });
}

function openQuiz(){ quiz.hidden=false; document.body.classList.add('quiz-open'); current=answers.findIndex(value=>value===null); if(current<0) current=0; renderQuestion(); }
function closeQuiz(){ quiz.hidden=true; document.body.classList.remove('quiz-open'); document.querySelector('#test').scrollIntoView({behavior:'smooth'}); document.querySelector('#start-test').focus({preventScroll:true}); }
document.querySelector('#start-test').addEventListener('click',openQuiz);
document.querySelector('#close-quiz').addEventListener('click',closeQuiz);
document.addEventListener('keydown',event=>{ if(event.key==='Escape'&&!quiz.hidden) closeQuiz(); });
