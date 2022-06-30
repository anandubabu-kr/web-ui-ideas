function activate(link) {
    let selected = document.getElementsByClassName(link);
    let all = document.getElementsByClassName('link');
    console.log(typeof selected, selected[0]);
  
    for (let i of all) {
      i.classList.remove('active');
    }
    for (let i of selected) {
      i.classList.add('active');
    }
  }
  