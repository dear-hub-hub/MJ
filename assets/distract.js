const questions = [
  {
    q: '오늘은 정말 책을 읽기로 했다. 그런데 읽다가 궁금한 단어 하나가 생겼다.',
    a: [
      ['A', '검색했다가 연관 검색어까지 타고 들어간다. 궁금한 게 계속 생긴다.'],
      ['B', '검색해야지 생각만 하고 일단 책도 제대로 시작하지 못한다.'],
      ['C', '생각난 순간 바로 휴대폰부터 집어 든다.'],
      ['D', '그 단어가 너무 흥미로우면 그것만 한 시간 찾아본다.'],
      ['E', '검색도 하고 메시지도 보고 책도 읽는다. 어느 순간 셋 다 하고 있다.']
    ]
  },
  {
    q: '일주일 뒤까지 제출해야 하는 중요한 일이 생겼다.',
    a: [
      ['A', '시작했는데 더 재미있어 보이는 일이 생겨 어느새 다른 걸 하고 있다.'],
      ['B', '이상하게 손이 안 간다. 대신 마감 전날에는 놀라울 정도로 집중한다.'],
      ['C', '일단 시작부터 한다. 계획은 하면서 생각한다.'],
      ['D', '한번 제대로 시작하면 식사 시간도 잊고 끝까지 파고든다.'],
      ['E', '이것도 해야 하고 저것도 생각나서 파일만 여러 개 열려 있다.']
    ]
  },
  {
    q: '휴대폰을 잠깐 확인했는데 30분이 지났다. 가장 가능성 높은 이유는?',
    a: [
      ['A', '처음 보려던 것보다 더 재미있는 걸 발견했다.'],
      ['B', '사실 해야 할 일을 피하려고 휴대폰을 집어 들었다.'],
      ['C', '알림이 뜨면 거의 반사적으로 눌러본다.'],
      ['D', '영상 하나에 빠져 관련 콘텐츠를 끝까지 찾아봤다.'],
      ['E', '카톡→검색→SNS→메일을 돌아다니다 보니 그렇게 됐다.']
    ]
  },
  {
    q: '갑자기 재미있는 아이디어가 떠올랐다.',
    a: [
      ['A', '신나서 시작하지만 조금 뒤 더 재미있는 아이디어가 또 생긴다.'],
      ['B', '정말 좋은 생각이라고 생각하면서도 시작은 나중으로 미룬다.'],
      ['C', '생각난 순간 바로 실행한다.'],
      ['D', '시작하면 그것만 생각하면서 몇 시간이고 붙잡는다.'],
      ['E', '아이디어 A를 하다가 B와 C까지 동시에 시작한다.']
    ]
  },
  {
    q: '친구와 카페에서 대화하는 중이다.',
    a: [
      ['A', '옆 테이블에서 흥미로운 이야기가 들리면 나도 모르게 귀가 간다.'],
      ['B', '중요한 얘기라는 걸 알면서도 어느 순간 다른 생각을 하고 있다.'],
      ['C', '상대의 말이 끝나기 전에 떠오른 말을 먼저 꺼낼 때가 있다.'],
      ['D', '관심 있는 주제가 나오면 질문이 계속 이어진다.'],
      ['E', '대화도 듣고 음악도 듣고 주변도 보고 있다.']
    ]
  },
  {
    q: '해야 할 일이 너무 많아졌다.',
    a: [
      ['A', '그중 가장 재미있어 보이는 것부터 한다.'],
      ['B', '뭘 먼저 해야 할지 고민하다 시작 자체가 늦어진다.'],
      ['C', '눈앞에 보이는 것부터 바로 처리한다.'],
      ['D', '하나를 골랐다면 다른 일이 밀려도 그것부터 끝내고 싶다.'],
      ['E', '조금씩 전부 손대다 보니 완료된 것은 별로 없다.']
    ]
  },
  {
    q: '재미있는 드라마를 발견했다. 내일 아침 일찍 일어나야 한다.',
    a: [
      ['A', '보다 보니 다른 작품까지 궁금해져 예고편을 찾아본다.'],
      ['B', '하루 종일 미뤘던 일을 생각하며 드라마를 보다가 밤늦게 일을 시작한다.'],
      ['C', '“한 편만 더”를 생각하는 순간 이미 다음 화를 눌렀다.'],
      ['D', '결말을 볼 때까지 다른 일을 생각하기 어렵다.'],
      ['E', '드라마를 보면서 검색도 하고 친구에게 메시지도 보낸다.']
    ]
  },
  {
    q: '일을 하다 갑자기 “세탁기 돌려야 하는데”라는 생각이 들었다.',
    a: [
      ['A', '세탁기를 돌리러 갔다가 눈에 들어온 다른 일을 시작한다.'],
      ['B', '해야 한다고 생각하지만 일도 세탁도 한동안 시작하지 않는다.'],
      ['C', '생각난 순간 자리에서 일어나 세탁기부터 돌린다.'],
      ['D', '지금 하는 일에 빠져 있다면 세탁기는 완전히 잊는다.'],
      ['E', '세탁기를 돌리고 돌아오는 길에 두세 가지 일을 더 한다.']
    ]
  },
  {
    q: '가장 듣기 싫은 말은?',
    a: [
      ['A', '“하나 좀 끝내고 다른 거 해.”'],
      ['B', '“그냥 시작하면 되잖아.”'],
      ['C', '“생각 좀 하고 해.”'],
      ['D', '“이제 그만하고 다른 거 해.”'],
      ['E', '“지금 대체 몇 가지를 하는 거야?”']
    ]
  },
  {
    q: '내 집중력과 연애한다면 가장 가까운 관계는?',
    a: [
      ['A', '새로운 사람이 나타날 때마다 마음이 흔들린다.'],
      ['B', '곁에 있을 때는 모르다가 헤어질 시간이 다가오면 애틋해진다.'],
      ['C', '좋아한다는 생각이 들면 고백부터 하고 본다.'],
      ['D', '한번 사랑하면 세상에 그 사람밖에 안 보인다.'],
      ['E', '한 사람을 보고 있는데 주변 사람들까지 계속 신경 쓰인다.']
    ]
  }
];

const results = {
  A: {
    symbol: '💘', name: '금사빠 사랑꾼', line: '“미안, 방금 더 흥미로운 걸 봤어.”',
    copy: '당신의 집중력은 새로운 것에 쉽게 반합니다.\n\n하고 있던 일이 싫어진 것은 아닙니다. 다만 새로운 알림, 새로운 생각, 새로운 질문처럼 조금 더 눈에 띄는 대상이 나타나는 순간 마음이 먼저 움직입니다.\n\n그래서 책을 읽다가 검색을 하고, 검색하다 영상을 보고, 영상을 보다 또 다른 것이 궁금해집니다. 하나하나에는 꽤 진지하게 관심을 주지만 그 관심의 대상이 빠르게 바뀌는 편입니다.\n\n당신에게 필요한 것은 무조건 오래 버티는 힘이라기보다 새로운 자극이 나타났을 때 지금의 주의를 어디에 둘 것인지 한 번 더 선택할 여유일지도 모릅니다.',
    ask: '당신은 집중력이 부족하다기보다, 새로운 것과 너무 쉽게 사랑에 빠지는 편입니다.'
  },
  B: {
    symbol: '⏰', name: '밀당 사랑꾼', line: '“마감이 떠나려 하자 갑자기 사랑에 빠졌다.”',
    copy: '당신의 집중력은 가까이 있을 때보다 떠날 때 뜨거워집니다.\n\n일주일 남았을 때는 도무지 손이 가지 않던 일이 하루 전에는 갑자기 중요해지고, 세 시간밖에 남지 않으면 놀라울 만큼 집중되기도 합니다.\n\n이런 모습에는 단순한 ‘의지 부족’이라는 설명보다 과제를 시작하고 행동으로 옮기는 과정, 그리고 즉각적인 동기와 보상이 얼마나 강한가라는 문제가 함께 들어 있을 수 있습니다.\n\n마감이 멀리 있을 때는 희미했던 일이 시간이 줄어들수록 갑자기 선명해지는 것이죠.',
    ask: '당신은 집중력이 부족하다기보다, 마음이 움직일 이유가 가까이 와야 뜨거워지는 편입니다.'
  },
  C: {
    symbol: '💌', name: '직진 사랑꾼', line: '“좋아한다고? 일단 고백부터 하고 생각하자.”',
    copy: '당신의 집중력에는 브레이크보다 액셀이 먼저 반응하는 순간이 있습니다.\n\n알림이 뜨면 누르고, 생각이 떠오르면 말하고, 재미있는 일이 생기면 일단 시작합니다. 이것은 집중의 지속시간만으로 설명하기보다 떠오른 반응을 잠시 멈추고 선택하는 억제 조절과 연결해서 생각해볼 수 있습니다.\n\n물론 빠르게 움직인다는 것은 장점이 되기도 합니다. 문제는 행동의 속도가 내가 생각할 시간을 자꾸 추월할 때입니다.\n\n당신에게 필요한 질문은 “왜 이것도 집중하지 못하지?”보다 어쩌면 “지금 바로 반응해야 할까?”에 가까울지도 모릅니다.',
    ask: '당신은 마음이 없는 사람이 아니라, 마음보다 행동이 조금 먼저 출발하는 사랑꾼입니다.'
  },
  D: {
    symbol: '❤️‍🔥', name: '일편단심 사랑꾼', line: '“한번 마음을 줬으면 끝을 봐야지.”',
    copy: '당신은 집중을 못하는 사람이라고 하기에는 이상한 구석이 있습니다.\n\n정말 재미있는 것을 만나면 시간이 얼마나 흘렀는지도 모를 만큼 깊이 빠져들 수 있기 때문입니다. 문제는 오히려 그다음입니다. 그만해야 한다는 것을 알면서도 멈추기 어렵고, 이미 붙잡힌 주의를 다른 곳으로 옮기는 데 시간이 걸립니다.\n\nADHD를 설명할 때 흔히 ‘하이퍼포커스’라는 표현이 등장하는 이유도 이런 경험 때문입니다. 다만 강한 몰입 자체가 ADHD를 의미하거나 ADHD만의 특징인 것은 아닙니다.\n\n집중은 오래 붙잡는 능력만이 아닙니다. 필요한 순간에 붙잡고, 필요한 순간에는 놓을 수 있는 능력이기도 합니다.',
    ask: '당신은 집중하지 못하는 사람이 아니라, 한번 사랑하면 헤어지는 데 시간이 필요한 편입니다.'
  },
  E: {
    symbol: '💞', name: '모두에게 다정한 사랑꾼', line: '“다 신경 쓰이는데 어떻게 하나만 봐?”',
    copy: '당신의 주의는 꽤 바쁩니다.\n\n책을 읽으면서 음악이 들리고, 메시지가 오면 확인하고 싶고, 갑자기 생각난 할 일도 잊고 싶지 않습니다. 하나에 아무 관심도 없는 것이 아니라 여러 가지가 동시에 중요하게 느껴지는 쪽에 가깝습니다.\n\n그래서 하루 종일 바빴는데 저녁이 되면 이상하게 끝난 일이 적을 때도 있습니다. 주의가 멈춰 있었던 게 아니라 너무 자주 이동했기 때문입니다.\n\n당신에게 필요한 것은 더 열심히 집중하는 것이 아니라 때로는 지금 사랑할 하나를 정하고 나머지에게 잠시 답장하지 않는 것일지도 모릅니다.',
    ask: '당신은 집중력이 부족하다기보다, 너무 많은 것에 다정한 사람입니다.'
  }
};

const quiz = document.querySelector('#quiz');
const content = document.querySelector('#quiz-content');
let current = 0;
let answers = Array(questions.length).fill(null);

function renderQuestion() {
  const item = questions[current];
  content.innerHTML = `<div class="quiz-stage">
    <div class="quiz-progress"><div class="progress-track"><i style="width:${(current + 1) * 10}%"></i></div><span>${String(current + 1).padStart(2, '0')} / 10</span></div>
    <p class="quiz-kicker">WHAT KIND OF LOVE DOES YOUR ATTENTION HAVE?</p>
    <h2 class="quiz-question">${item.q}</h2>
    <div class="choices">${item.a.map(([key, text]) => `<button class="choice ${answers[current] === key ? 'selected' : ''}" data-key="${key}"><b>${key}</b><span>${text}</span></button>`).join('')}</div>
    <div class="quiz-nav"><button id="prev" ${current === 0 ? 'disabled' : ''}>← 이전 질문</button><button id="quit">이야기로 돌아가기</button></div>
  </div>`;
  content.querySelectorAll('.choice').forEach(button => button.addEventListener('click', () => {
    answers[current] = button.dataset.key;
    content.querySelectorAll('.choice').forEach(choice => choice.classList.remove('selected'));
    button.classList.add('selected');
    window.setTimeout(() => {
      current += 1;
      current < questions.length ? renderQuestion() : renderResult();
    }, 160);
  }));
  content.querySelector('#prev').addEventListener('click', () => { if (current > 0) { current -= 1; renderQuestion(); } });
  content.querySelector('#quit').addEventListener('click', closeQuiz);
}

function getWinners() {
  const counts = Object.fromEntries(Object.keys(results).map(key => [key, 0]));
  answers.forEach(answer => { if (answer) counts[answer] += 1; });
  const max = Math.max(...Object.values(counts));
  return Object.keys(counts).filter(key => counts[key] === max);
}

function renderResult() {
  const winners = getWinners();
  const tied = winners.length > 1;
  const result = tied ? {
    symbol: '💞',
    name: '두 마음 사이',
    line: winners.map(key => results[key].name).join(' · '),
    copy: `결과가 두 개 이상 비슷하게 나온 것은 자연스럽습니다.\n\n사람의 주의가 언제나 한 가지 방식으로만 움직이는 것은 아니니까요. 재미있는 일을 할 때는 일편단심이었다가 하기 싫은 일을 앞에 두면 밀당을 하고, 휴대폰을 켜는 순간에는 금사빠가 될 수도 있습니다.\n\n중요한 것은 어떤 사랑꾼이라는 이름을 얻는 것이 아니라, 나는 무엇에 쉽게 끌리고 무엇을 시작하기 어렵고 무엇에서는 빠져나오기 어려운지 발견하는 일입니다.`,
    ask: '그 차이를 발견하는 것이 자신의 집중력을 이해하는 더 재미있는 출발점입니다.'
  } : results[winners[0]];

  content.innerHTML = `<div class="result-wrap">
    <p class="result-label">YOUR ATTENTION IN LOVE</p>
    <article class="result-card"><span class="result-symbol" aria-hidden="true">${result.symbol}</span><p class="quiz-kicker">${result.line}</p><h2 class="result-name">${result.name}</h2><p class="result-copy">${result.copy}</p><p class="result-question">${result.ask}</p><p class="result-disclaimer">이 테스트는 ADHD 진단도구가 아니며 결과는 의학적 ADHD 유형과 대응하지 않습니다.</p></article>
    <div class="result-actions"><button class="primary" id="share-result">결과 공유하기</button><button id="restart">다시 해보기</button><button id="back-article">← 이야기로 돌아가기</button></div>
  </div>`;

  content.querySelector('#restart').addEventListener('click', () => { current = 0; answers.fill(null); renderQuestion(); });
  content.querySelector('#back-article').addEventListener('click', closeQuiz);
  content.querySelector('#share-result').addEventListener('click', async event => {
    const text = `내 집중력의 사랑 방식은 ${result.name}! ${result.line}`;
    try {
      if (navigator.share) await navigator.share({ title: '당신의 집중력은 어떤 사랑을 하나요?', text, url: location.href });
      else { await navigator.clipboard.writeText(`${text}\n${location.href}`); event.currentTarget.textContent = '결과 링크를 복사했어요'; }
    } catch (error) {
      if (error.name !== 'AbortError') event.currentTarget.textContent = '공유하지 못했어요';
    }
  });
}

function openQuiz() {
  quiz.hidden = false;
  document.body.classList.add('quiz-open');
  current = answers.findIndex(value => value === null);
  if (current < 0) current = 0;
  renderQuestion();
}

function closeQuiz() {
  quiz.hidden = true;
  document.body.classList.remove('quiz-open');
  document.querySelector('#test').scrollIntoView({ behavior: 'smooth' });
  document.querySelector('#start-test').focus({ preventScroll: true });
}

document.querySelector('#start-test').addEventListener('click', openQuiz);
document.querySelector('#close-quiz').addEventListener('click', closeQuiz);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !quiz.hidden) closeQuiz(); });
