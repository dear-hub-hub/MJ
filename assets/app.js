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
  const questions = [
    {title:'아이가 처음 해보는 일 앞에서 망설입니다. 나는 어떻게 할까요?', choices:['먼저 방법을 알려주고 시작하게 한다','함께 첫 단계를 해본 뒤 맡긴다','스스로 해볼 시간을 충분히 준다']},
    {title:'아이가 애써 한 일에서 실수했습니다. 가장 먼저 하고 싶은 말은?', choices:['다음에는 실수하지 않는 방법을 알려준다','어떤 부분이 어려웠는지 물어본다','일단 다시 해볼 수 있게 기다린다']},
    {title:'아이가 관심 있는 일이 낯설고 비효율적으로 보입니다. 나는?', choices:['더 도움이 될 만한 활동을 권한다','왜 흥미로운지 함께 들어본다','직접 탐색하고 판단할 시간을 준다']}
  ];
  let step = 0, score = 0, previousFocus;
  function render() {
    stepLabel.textContent = step < questions.length ? `0${step + 1} / 03` : 'YOUR REFLECTION';
    if (step < questions.length) {
      const q = questions[step];
      content.innerHTML = `<h2>${q.title}</h2><div class="test-options">${q.choices.map((choice, index) => `<button type="button" class="test-option" data-score="${index}">${choice}</button>`).join('')}</div>`;
      content.querySelectorAll('.test-option').forEach(button => button.addEventListener('click', () => {score += Number(button.dataset.score); step++; render();}));
    } else {
      const result = score <= 2 ? ['먼저 길을 밝혀주는 편','아이를 돕고 싶은 마음이 빠르게 행동으로 이어지는 편입니다. 다음에는 답을 알려주기 전, 아이가 무엇을 해보고 싶은지 한 번 물어보세요.'] : score <= 4 ? ['함께 걸으며 지켜보는 편','아이에게 시간을 주면서도 필요할 때 곁에 있는 편입니다. 어느 순간에는 한 걸음 뒤로 물러나는 선택도 해볼 수 있습니다.'] : ['스스로 날씨를 만나게 하는 편','아이의 시도를 믿고 기다릴 줄 아는 편입니다. 어려워할 때 돌아올 수 있는 안전한 자리가 있다는 것도 함께 알려주세요.'];
      content.innerHTML = `<span class="test-result-kicker">당신의 오늘의 반응</span><h2>${result[0]}</h2><p>${result[1]}</p><p class="test-disclaimer">이 테스트는 생각을 돕는 에디토리얼 콘텐츠이며 심리 평가나 진단이 아닙니다.</p><button type="button" class="test-reset">다시 해보기 ↗</button>`;
      content.querySelector('.test-reset').addEventListener('click', () => {step=0;score=0;render();});
    }
  }
  function close() {modal.hidden=true;document.body.classList.remove('modal-open');previousFocus?.focus();}
  openTest.addEventListener('click', () => {previousFocus=document.activeElement;step=0;score=0;render();modal.hidden=false;document.body.classList.add('modal-open');modal.querySelector('.test-close').focus();});
  modal.querySelectorAll('[data-close-test]').forEach(button => button.addEventListener('click', close));
  document.addEventListener('keydown', event => {if (modal.hidden) return;if (event.key === 'Escape') close();if (event.key === 'Tab') {const nodes=[...modal.querySelectorAll('button')].filter(node => node.offsetParent !== null);const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}}});
})();
