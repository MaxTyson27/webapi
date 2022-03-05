'use strict';

const btn = document.querySelector('#btn')
const form = document.querySelector('.form')
const select = document.querySelector('.select')
const fullName = document.querySelector('.input-name')
const age = document.querySelector('.age')
const body = document.querySelector('body')
const table = document.querySelector('.table')
const skillsInput = document.querySelector('.input-skills')
const sideSelect = document.querySelector('.select-side')
const countrySelect = document.querySelector('.select-country')
const childLabel = document.querySelector('.label-child')
const inputRank = document.querySelector('.input-rank')
const childCheckbox = childLabel.querySelector('input')


class Shinobi {
  constructor (fullname, age, side, country) {
    this.fullName = fullname
    this.age = age
    this.side = side
    this.country = country
    this.getFullName();
  }
  getFullName() {
    this.fullName = this.fullName.split(' ');
  }
  createElem() {
    const tr = document.createElement('tr')
    table.after(tr)
    tr.classList.add('shinobi')
    tr.innerHTML = `<td>Имя: ${this.fullName[1]}</td> <td>Фамилия: ${this.fullName[0]}</td> <td>Возраст: ${this.age}</td> <td>Сторона: ${this.side}</td> <td>Деревня: ${this.country}</td>`
  }

}

class Uchiha extends Shinobi {
  constructor (fullname, age, side, country, skills, child) {
    super(fullname, age, side, country);
    this._skills = skills
    this._children = child
  }

  get children () {
    this._children = "Да"
  }
  set children (bool) {
    if(bool) {
      this.children = "Да"
      console.log("da")
    } else {
      this.children = "Нет"
    }
  }
  createElem() {
    const tr = document.createElement('tr')
    table.after(tr)
    tr.classList.add('shinobi')
    tr.innerHTML = `<td>Имя: ${this.fullName[1]}</td> <td>Фамилия: ${this.fullName[0]}</td> <td>Возраст: ${this.age}</td> <td>Сторона: ${this.side}</td> <td>Деревня: ${this.country}</td> <td>Умения: ${this.skills}</td> <td>Дети: ${this.children}</td>`
  }
}

class Uzumaki extends Uchiha {
  constructor (fullname, age, side, country, skills, child, rank,) {
    super(fullname, age, side, country, skills, child)
    this.rank = rank
    // this._strength = strength
  }
}

select.addEventListener('change', () => {
  if(select.selectedIndex == 2 || select.selectedIndex == 3) {
    skillsInput.style.display = 'block'
    childLabel.style.display = 'block'
  } else {
    skillsInput.style.display = 'none'
    childLabel.style.display = 'none'
  }
  if(select.selectedIndex == 3) {
    inputRank.style.display = 'block'
  } else {
    inputRank.style.display = 'none'
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(select[select.selectedIndex].value == 'shinobi'){
    let shinobi = new Shinobi(fullName.value, age.value, sideSelect[sideSelect.selectedIndex].outerText, countrySelect[countrySelect.selectedIndex].outerText);
    shinobi.createElem();
  } else if (select[select.selectedIndex].value == 'uchiha' ) {
    let uchiha = new Uchiha(fullName.value, age.value, sideSelect[sideSelect.selectedIndex].outerText, countrySelect[countrySelect.selectedIndex].outerText, skillsInput.value, childCheckbox.checked)
    uchiha.createElem();
    console.log(uchiha)
  }
});

console.dir(Shinobi)
console.dir(Uchiha)
console.dir(Uzumaki)
