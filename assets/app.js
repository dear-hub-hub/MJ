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
    {id:'hunter', name:'사냥꾼형', trait:'보호', description:'아이가 위험하거나 상처받을 때 빠르게 곁으로 가는 편이에요.', thought:'지금 필요한 도움이 무엇인지 먼저 물어보면, 보호하면서도 아이의 목소리를 남길 수 있어요.'},
    {id:'pig', name:'셋째 아기 돼지형', trait:'준비', description:'아이를 위해 튼튼한 환경과 예측 가능한 계획을 만들어요.', thought:'준비한 길 밖에서 아이가 직접 선택할 작은 자리도 남겨보세요.'},
    {id:'fairy', name:'요정 대모형', trait:'지원', description:'아이가 한 걸음 나아갈 수 있도록 도구와 기회를 찾아 건네요.', thought:'도움을 건넨 뒤에는 그 도구를 어떻게 쓸지 아이에게 맡겨보세요.'},
    {id:'turtle', name:'거북이형', trait:'기다림', description:'결과를 서두르기보다 아이가 자기 속도로 해보는 시간을 믿어요.', thought:'기다리는 동안 아이가 도움을 청할 수 있다는 것도 알려주세요.'},
    {id:'rapunzel', name:'라푼젤형', trait:'탐험', description:'아이가 익숙한 울타리 밖에서 새로운 경험을 해보도록 북돋아요.', thought:'새로운 시도 뒤에는 아이가 무엇을 느꼈는지 함께 돌아보세요.'}
  ];
  const questions = [
    {type:'hunter', text:'아이가 낯선 일 앞에서 겁을 내면, 먼저 곁으로 가서 안심시켜 주고 싶다.'},
    {type:'pig', text:'아이가 새로운 일을 시작하기 전, 필요한 준비를 함께 점검하는 편이다.'},
    {type:'fairy', text:'아이가 관심을 보이는 일이 생기면, 시도해볼 수 있는 재료나 기회를 찾아준다.'},
    {type:'turtle', text:'아이가 느리게 배우더라도, 스스로 익힐 시간을 충분히 주는 편이다.'},
    {type:'rapunzel', text:'아이가 익숙하지 않은 곳에 가보고 싶다고 하면, 먼저 가능성을 함께 생각한다.'},
    {type:'hunter', text:'아이가 친구와의 일로 상처받았을 때, 상황을 확인하고 적극적으로 도울 준비를 한다.'},
    {type:'pig', text:'아이가 실수했을 때, 다음에 같은 어려움을 줄일 방법을 함께 정리한다.'},
    {type:'fairy', text:'아이가 막혀 있을 때, 정답보다 도움이 될 만한 사람이나 자료를 연결해준다.'},
    {type:'turtle', text:'아이가 문제를 풀지 못해도, 바로 방법을 알려주기 전에 잠깐 기다린다.'},
    {type:'rapunzel', text:'아이가 처음 해보는 활동에 관심을 보이면, 결과보다 경험 자체를 반긴다.'},
    {type:'hunter', text:'아이가 힘든 일을 털어놓으면, 혼자 감당하지 않아도 된다는 말을 먼저 건넨다.'},
    {type:'pig', text:'중요한 일을 앞두고 아이와 작은 계획이나 연습 순서를 만드는 편이다.'},
    {type:'fairy', text:'아이가 목표를 말하면, 그 목표에 닿을 수 있는 선택지를 함께 찾아본다.'},
    {type:'turtle', text:'아이가 같은 실수를 반복해도, 다시 해볼 기회를 주려고 한다.'},
    {type:'rapunzel', text:'아이가 내 예상과 다른 길을 고르면, 왜 마음이 가는지 먼저 들어본다.'}
  ];
  const scale = ['전혀 아니다','아닌 편이다','보통이다','그런 편이다','매우 그렇다'];
  const answers = Array(questions.length).fill(null);
  let step = 0, previousFocus;
  function render() {
    stepLabel.textContent = step < questions.length ? `${String(step + 1).padStart(2, '0')} / 15` : 'RESULT';
    if (step < questions.length) {
      const q = questions[step];
      content.innerHTML = `<div class="test-progress" role="progressbar" aria-label="테스트 진행" aria-valuenow="${step}" aria-valuemin="0" aria-valuemax="15"><span style="width:${step / questions.length * 100}%"></span></div><span class="test-question-kicker">QUESTION ${String(step + 1).padStart(2, '0')} / ${questions.length}</span><h2 id="test-title" tabindex="-1">${q.text}</h2><p class="test-instruction">평소 내 모습과 얼마나 가까운가요?</p><div class="test-options">${scale.map((label, index) => `<button type="button" class="test-option${answers[step] === index + 1 ? ' is-selected' : ''}" data-value="${index + 1}"><span class="test-option-number">${index + 1}</span><span>${label}</span></button>`).join('')}</div><div class="test-navigation">${step ? '<button type="button" class="test-back">← 이전 질문</button>' : '<span>생각나는 모습에 가깝게 답해 주세요.</span>'}</div>`;
      content.querySelectorAll('.test-option').forEach(button => button.addEventListener('click', () => {answers[step] = Number(button.dataset.value); step++; render(); content.querySelector('#test-title')?.focus();}));
      content.querySelector('.test-back')?.addEventListener('click', () => {step--; render(); content.querySelector('#test-title')?.focus();});
    } else {
      const results = types.map(type => {
        const values = questions.map((question, index) => question.type === type.id ? answers[index] : null).filter(value => value !== null);
        const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
        return {...type, mean, value: Math.round(mean)};
      });
      const highest = Math.max(...results.map(result => result.mean));
      const leaders = results.filter(result => result.mean === highest);
      const lead = leaders[0];
      const leadText = leaders.length > 1 ? `가장 높은 반응이 ${leaders.length}가지로 함께 나타났어요. 그중 ${lead.name}의 모습을 먼저 살펴볼까요?` : lead.description;
      content.innerHTML = `<div class="test-progress" role="progressbar" aria-label="테스트 진행" aria-valuenow="15" aria-valuemin="0" aria-valuemax="15"><span style="width:100%"></span></div><span class="test-result-kicker">YOUR REFLECTION / 동화 속 나의 반응</span><h2 id="test-title" tabindex="-1">${lead.name}</h2><p class="test-result-intro">${leadText}</p><div class="test-gauges" aria-label="다섯 유형 결과">${results.map(result => `<div class="test-gauge"><div class="test-gauge-heading"><span>${result.name} <small>${result.trait}</small></span><strong>${result.value} / 5</strong></div><div class="test-gauge-track" role="img" aria-label="${result.name} ${result.value}점 / 5점">${Array.from({length:5}, (_, index) => `<span class="${index < result.value ? 'is-filled' : ''}"></span>`).join('')}</div></div>`).join('')}</div><div class="test-result-note"><span>ONE MORE THOUGHT</span><p>${lead.thought}</p></div><p class="test-disclaimer">각 유형의 점수는 해당 질문 3개의 평균을 반올림한 값입니다. 높고 낮음에 우열은 없어요. 이 테스트는 생각을 돕는 에디토리얼 콘텐츠이며 심리 평가나 진단이 아닙니다.</p><button type="button" class="test-reset">다시 해보기 ↗</button>`;
      content.querySelector('.test-reset').addEventListener('click', () => {answers.fill(null); step=0; render(); content.querySelector('#test-title')?.focus();});
    }
    modal.querySelector('.test-dialog').scrollTop = 0;
  }
  function close() {modal.hidden=true;document.body.classList.remove('modal-open');previousFocus?.focus();}
  openTest.addEventListener('click', () => {previousFocus=document.activeElement;step=0;answers.fill(null);render();modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.test-close').focus();});
  modal.querySelectorAll('[data-close-test]').forEach(button => button.addEventListener('click', close));
  document.addEventListener('keydown', event => {if (modal.hidden) return;if (event.key === 'Escape') close();if (event.key === 'Tab') {const nodes=[...modal.querySelectorAll('button')].filter(node => node.offsetParent !== null);const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}}});
})();
