// BURGER

const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__wrap');
const aside = document.querySelector('.side');
const account = document.querySelector('.operation__btn');
const accountMenu = document.querySelector('.account');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  aside.classList.toggle('active');
  document.body.classList.toggle('lock');
});

account.addEventListener('click', function () {
  accountMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
});

closeBtn.addEventListener('click', function () {
  accountMenu.classList.remove('active')
});

// dropdown // dropdown // dropdown // dropdown // dropdown 

const params = {
  btnClassName: "drop-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();