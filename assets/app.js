(() => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      mobileNav.hidden = !open;
    });
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.story-card')];
  const count = document.querySelector('#story-count');
  function setFilter(category) {
    if (!cards.length) return;
    let visible = 0;
    cards.forEach(card => {
      const matches = category === 'ALL' || card.dataset.categories.split(' ').includes(category);
      card.hidden = !matches;
      if (matches) visible++;
    });
    document.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === category;
      button.classList.toggle('is-active', active);
      if (button.tagName === 'BUTTON') button.setAttribute('aria-pressed', String(active));
    });
    if (count) count.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'STORY' : 'STORIES'}`;
    const empty = document.querySelector('.empty-state');
    if (empty) empty.hidden = visible !== 0;
  }
  filters.forEach(control => control.addEventListener('click', event => {
    if (!cards.length) return;
    event.preventDefault();
    setFilter(control.dataset.filter);
    if (mobileNav) mobileNav.hidden = true;
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
    document.querySelector('#latest, #stories')?.scrollIntoView({behavior:'smooth'});
  }));

  const progress = document.querySelector('.reading-progress span');
  if (progress) {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${max > 0 ? Math.min(100, scrollY / max * 100) : 0}%`;
    };
    addEventListener('scroll', updateProgress, {passive:true});
    addEventListener('resize', updateProgress);
    updateProgress();
  }

  const modal = document.querySelector('#test-modal');
  const content = document.querySelector('#test-content');
  const stepLabel = document.querySelector('#test-step-label');
  const openTest = document.querySelector('#open-test');
  if (!modal || !content || !openTest) return;
  const types = [
    {id:'hunter', name:'사냥꾼', action:'곁으로 가기', identity:'당신은 아이에게 돌아올 자리가 되어주는 사람입니다.', portrait:'아이가 낯선 상황 앞에서 멈칫하면, 해결책보다 먼저 아이 쪽으로 몸을 돌립니다. 혼자 버티게 하고 싶지 않은 마음이 당신의 첫 반응에 담겨 있어요.', essence:'아이가 멈칫할 때 먼저 곁을 내줍니다.', voice:'“어려우면 나를 불러도 돼.”', question:'지금 아이가 원하는 건 나의 손일까, 들어주는 자리일까?'},
    {id:'pig', name:'셋째 아기 돼지', action:'구조 만들기', identity:'당신은 막연한 걱정을 해볼 만한 순서로 바꾸는 사람입니다.', portrait:'아이가 막막해하면 무엇부터 해볼 수 있을지 함께 살핍니다. 당신에게 준비란 아이의 길을 대신 정하는 일이 아니라, 첫발을 내딛기 쉽게 만드는 일에 가깝습니다.', essence:'막막함을 작은 순서로 바꿉니다.', voice:'“한 번에 다 하지 않아도 돼. 하나씩 보자.”', question:'이 준비 중 아이가 직접 고르고 바꿀 수 있는 것은 무엇일까?'},
    {id:'fairy', name:'요정 대모', action:'도구 건네기', identity:'당신은 아이의 가능성을 손에 잡히는 기회로 바꾸는 사람입니다.', portrait:'아이가 무언가 해보고 싶어 할 때, 필요한 재료나 사람을 떠올립니다. 아이가 직접 선택하고 시도할 수 있도록 곁에 도구를 놓아주는 편이에요.', essence:'시도할 수 있는 도구와 기회를 찾아둡니다.', voice:'“필요한 걸 함께 찾아볼 수 있어.”', question:'지금 건넨 도구를 아이는 어떻게 쓰고 싶을까?'},
    {id:'turtle', name:'거북이', action:'시간 남기기', identity:'당신은 아이의 속도를 믿고 시간을 남겨주는 사람입니다.', portrait:'아이가 멈췄을 때 곧바로 다음 행동을 정하지 않습니다. 잠시 쉬고 다시 해볼 마음이 생기기를 기다릴 수 있는 사람이에요.', essence:'아이의 속도를 믿고 시간을 남깁니다.', voice:'“서두르지 않아도 돼. 여기 있을게.”', question:'기다리는 동안 아이는 도움을 청할 수 있다는 걸 알고 있을까?'},
    {id:'rapunzel', name:'라푼젤', action:'새 길 열기', identity:'당신은 아이 앞에 새로운 세상의 문을 열어두는 사람입니다.', portrait:'아이가 익숙하지 않은 일에 호기심을 보이면, 해보기도 전에 결론부터 내리지 않습니다. 아이가 직접 경험한 뒤 자기 생각을 만들어가기를 바라는 편이에요.', essence:'새로운 경험의 문을 열어둡니다.', voice:'“궁금하다면 한번 만나봐도 돼.”', question:'이 경험에서 아이가 가장 궁금해하는 것은 무엇일까?'}
  ];
  const questions = [
    {text:'아이가 내일 발표가 걱정된다며 잠을 미룹니다.', choices:[{type:'hunter', text:'먼저 아이 곁에 앉아 어떤 순간이 걱정되는지 듣는다.'},{type:'pig', text:'아이가 원하면 발표 흐름을 한 장에 함께 정리해본다.'}]},
    {text:'아이가 친구와 다툰 뒤 말을 걸기 싫어합니다.', choices:[{type:'fairy', text:'아이가 말을 꺼낼 때 쓸 만한 표현 몇 가지를 함께 떠올린다.'},{type:'hunter', text:'지금은 말하지 않아도 된다며 가까이 앉아 있는다.'}]},
    {text:'아이가 하던 과제를 밀어놓고 “못 하겠어”라고 합니다.', choices:[{type:'hunter', text:'아이가 원하는 부분부터 옆에서 잠깐 같이 시작한다.'},{type:'turtle', text:'잠깐 쉬고, 다시 시작할 마음이 생길 때까지 기다린다.'}]},
    {text:'아이가 처음 가는 캠프에 관심을 보이면서도 망설입니다.', choices:[{type:'rapunzel', text:'캠프에서 해보고 싶은 일을 물으며 상상할 시간을 준다.'},{type:'hunter', text:'낯선 장소가 덜 부담스럽도록 첫날 함께 가본다.'}]},
    {text:'아이가 새로운 취미를 시작하고 싶다고 합니다.', choices:[{type:'pig', text:'아이와 함께 지금 생활에서 해볼 시간을 살펴본다.'},{type:'fairy', text:'아이가 골라볼 수 있게 체험 기회 몇 가지를 찾아 보여준다.'}]},
    {text:'자전거 연습 중 넘어진 아이가 다시는 타지 않겠다고 합니다.', choices:[{type:'turtle', text:'아이가 다시 타고 싶다고 할 때 연습을 이어간다.'},{type:'pig', text:'다음에 타고 싶어지면 아이가 편한 구간부터 해볼 수 있게 살펴둔다.'}]},
    {text:'아이가 예정에 없던 동아리에 들어가고 싶어 합니다.', choices:[{type:'pig', text:'다른 일정과 함께 할 수 있을지 아이와 살펴본다.'},{type:'rapunzel', text:'한 번 참가해본 뒤 계속할지 아이가 판단하게 한다.'}]},
    {text:'아이가 읽을 책을 고르지 못하고 서성입니다.', choices:[{type:'fairy', text:'아이 취향에 맞을 듯한 책 몇 권을 옆에 놓아둔다.'},{type:'turtle', text:'서두르지 않고 아이가 직접 둘러볼 시간을 준다.'}]},
    {text:'아이가 “나는 나중에 무슨 일을 할까?”라고 묻습니다.', choices:[{type:'rapunzel', text:'관심 있는 일을 가까이서 볼 기회가 있는지 함께 찾아본다.'},{type:'fairy', text:'그 일을 하는 사람의 이야기나 자료를 건넨다.'}]},
    {text:'아이가 숙제를 평소와 다른 방법으로 해보겠다고 합니다.', choices:[{type:'turtle', text:'아이가 정한 방식으로 한번 끝내볼 시간을 준다.'},{type:'rapunzel', text:'그 방식으로 며칠 해본 뒤 느낌을 나눠보자고 한다.'}]},
    {text:'아이가 체험학습 준비물을 자꾸 빠뜨립니다.', choices:[{type:'pig', text:'아이 스스로 확인할 수 있는 짧은 목록을 같이 만든다.'},{type:'hunter', text:'이번에는 저녁에 함께 챙기며 내일 부담을 덜어준다.'}]},
    {text:'아이가 글을 쓰려는데 첫 문장부터 막힙니다.', choices:[{type:'fairy', text:'아이가 원하면 떠올릴 만한 사진이나 낱말을 몇 개 건넨다.'},{type:'pig', text:'아이에게 먼저 떠오르는 장면을 묻고 순서를 함께 잡는다.'}]},
    {text:'만들던 작품이 마음에 들지 않는다며 아이가 멈춥니다.', choices:[{type:'turtle', text:'잠시 그대로 두고 다시 보고 싶을 때 돌아오게 한다.'},{type:'fairy', text:'다른 재료도 써볼 수 있게 곁에 놓아둔다.'}]},
    {text:'아이가 실패했던 활동을 다시 할지 고민합니다.', choices:[{type:'rapunzel', text:'같은 활동을 다른 방식으로 시도할 수 있는지 아이에게 묻는다.'},{type:'turtle', text:'지금 결정하지 않아도 된다며 아이의 마음이 정리되길 기다린다.'}]},
    {text:'아이가 처음 보는 친구들과 놀고 싶어 합니다.', choices:[{type:'hunter', text:'처음 몇 분은 아이가 쉽게 적응할 수 있도록 함께 가서 분위기를 살펴본다.'},{type:'rapunzel', text:'돌아올 시간을 정하고 아이가 먼저 다가가보게 한다.'}]}
  ];
  const answers = Array(questions.length).fill(null);
  let step = 0, previousFocus;
  function render() {
    stepLabel.textContent = step < questions.length ? `${String(step + 1).padStart(2, '0')} / 15` : 'RESULT';
    if (step < questions.length) {
      const q = questions[step];
      content.innerHTML = `<div class="test-progress" role="progressbar" aria-label="테스트 진행" aria-valuenow="${step}" aria-valuemin="0" aria-valuemax="15"><span style="width:${step / questions.length * 100}%"></span></div><span class="test-question-kicker">QUESTION ${String(step + 1).padStart(2, '0')} / ${questions.length}</span><h2 id="test-title" tabindex="-1">${q.text}</h2><p class="test-instruction">둘 다 하고 싶다면, 먼저 손이 갈 행동을 골라주세요.</p><div class="test-options">${q.choices.map((choice, index) => `<button type="button" class="test-option${answers[step] === index ? ' is-selected' : ''}" data-value="${index}"><span class="test-option-number">${index ? 'B' : 'A'}</span><span>${choice.text}</span></button>`).join('')}</div><div class="test-navigation">${step ? '<button type="button" class="test-back">← 이전 질문</button>' : '<span>어느 선택도 정답이나 오답이 아닙니다.</span>'}</div>`;
      content.querySelectorAll('.test-option').forEach(button => button.addEventListener('click', () => {answers[step] = Number(button.dataset.value); step++; render(); content.querySelector('#test-title')?.focus();}));
      content.querySelector('.test-back')?.addEventListener('click', () => {step--; render(); content.querySelector('#test-title')?.focus();});
    } else {
      const results = types.map(type => ({...type, count: questions.reduce((total, question, index) => total + Number(question.choices[answers[index]].type === type.id), 0)}));
      const sorted = [...results].sort((a, b) => b.count - a.count);
      const lead = sorted[0];
      const leaders = sorted.filter(result => result.count === lead.count);
      const next = sorted.find(result => result.count < lead.count);
      const identity = leaders.length === 1 ? lead.identity : leaders.length === 2 ? `당신은 ${leaders[0].action}와 ${leaders[1].action}을 함께 쓰는 사람입니다.` : '당신은 상황에 따라 돌봄의 모양을 바꾸는 사람입니다.';
      const portrait = leaders.length === 1 ? lead.portrait : leaders.length === 2 ? `${leaders[0].essence} ${leaders[1].essence} 두 반응이 같은 횟수로 나타났어요.` : '한 가지 반응이 앞서기보다, 장면에 따라 여러 방식을 골랐습니다. 아이에게 필요한 것이 매번 같지는 않다는 감각이 선택에 드러납니다.';
      const voice = leaders.length === 1 ? lead.voice : '“지금 우리에게 맞는 방법을 찾아보자.”';
      const tag = leaders.map(result => `${result.name} · ${result.action}`).join('  /  ');
      const support = leaders.length === 1 && next ? `<div class="test-result-support"><span>당신의 또 다른 모습</span><p>‘${next.action}’도 자주 골랐어요. ${next.essence}</p></div>` : '';
      const reflection = leaders.length === 1 ? lead.question : '지금 이 장면에서 아이에게 가장 필요한 것은 무엇일까?';
      content.innerHTML = `<div class="test-progress" role="progressbar" aria-label="테스트 진행" aria-valuenow="15" aria-valuemin="0" aria-valuemax="15"><span style="width:100%"></span></div><span class="test-result-kicker">A PORTRAIT OF YOU / 이번 답변에 비친 당신</span><p class="test-result-tag">${tag}</p><h2 id="test-title" tabindex="-1">${identity}</h2><p class="test-result-portrait">${portrait}</p><div class="test-result-voice"><span>아이에게 전해질 수 있는 말</span><p>${voice}</p></div>${support}<div class="test-gauges" aria-label="다섯 반응의 선택 횟수"><div class="test-gauges-title">내 선택의 방향 · 각 반응은 6번씩 등장</div>${results.map(result => `<div class="test-gauge"><div class="test-gauge-heading"><span>${result.action} <small>${result.name}</small></span><strong>${result.count} / 6</strong></div><div class="test-gauge-track" role="img" aria-label="${result.action}: 등장한 6장면 중 ${result.count}번 선택">${Array.from({length:6}, (_, index) => `<span class="${index < result.count ? 'is-filled' : ''}"></span>`).join('')}</div></div>`).join('')}</div><div class="test-result-note"><span>오늘 남겨볼 질문</span><p>${reflection}</p></div><p class="test-disclaimer">막대는 점수가 아니라 선택 횟수예요. 동화 속 캐릭터는 반응을 기억하기 위한 비유이며, 이 테스트는 심리 평가나 진단이 아닙니다.</p><button type="button" class="test-reset">다시 해보기 ↗</button>`;
      content.querySelector('.test-reset').addEventListener('click', () => {answers.fill(null); step=0; render(); content.querySelector('#test-title')?.focus();});
    }
    modal.querySelector('.test-dialog').scrollTop = 0;
  }
  function close() {modal.hidden=true;document.body.classList.remove('modal-open');previousFocus?.focus();}
  openTest.addEventListener('click', () => {previousFocus=document.activeElement;step=0;answers.fill(null);render();modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.test-close').focus();});
  modal.querySelectorAll('[data-close-test]').forEach(button => button.addEventListener('click', close));
  document.addEventListener('keydown', event => {if (modal.hidden) return;if (event.key === 'Escape') close();if (event.key === 'Tab') {const nodes=[...modal.querySelectorAll('button')].filter(node => node.offsetParent !== null);const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}}});
})();
