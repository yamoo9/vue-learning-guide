import './styles/globals.css';
// import jsImagePath from './assets/javascript.svg';

const jsonData = await import('./data.json');

const vm = (globalThis.vm = new Proxy(
  { ...jsonData },
  {
    get() {
      return Reflect.get(...arguments);
    },
    set(target, prop, newValue) {
      switch (prop) {
        case 'headline':
          {
            const h1 = app.querySelector('h1');
            const imgClone = h1.querySelector('img').cloneNode();
            h1.textContent = '\n' + newValue;
            h1.prepend(imgClone);
          }
          break;
        case 'description':
          app.querySelector('p').textContent = newValue;
          break;
        case 'count':
          app.querySelector('button').textContent = newValue;
      }

      Reflect.set(...arguments);
      return true;
    },
  }
));

const app = document.getElementById('app');

app.innerHTML = /* html */ `
  <h1>
    <img src="${vm.logos.js.src}" height="${vm.logos.js.size}" alt="${vm.logos.js.label}" />
    ${vm.headline}
  </h1>
  <p>${vm.description}</p>
  <button type="button" class="button">${vm.count}</button>
`;

app.addEventListener('click', ({ target }) => {
  if (target.matches('button')) {
    vm.count++;
  }
});
