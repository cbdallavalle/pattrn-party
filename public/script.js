// const mockData = require("./__mocks__/mock-data.js")
// import mockData from "./__mocks__/mock-data.js";

const codePens = {
  tab1: "Harry Potter and the Sorcerer's Stone",
  tab2: "Harry Potter and the Chamber of Secrets", 
  tab3: "Harry Potter and the Prisoner of Azkaban",
  tab4: "Harry Potter and the Goblet of Fire"
}

$(this).ready(() => {
  changeTabInfo("tab1");
  insertTabInformation({name: 'tab1'});
});

checkWindowWidth = () => {
  return $(this).width();
}

changeTabInfo = (tab) => {
  const innerText = codePens[tab];
  console.log($('#title').text())
  $('#title').text(innerText)
}

changeActiveButton = (target) => {
  const buttons = $('button');

  buttons.each( index => {
    if(buttons[index].name === target.name) {
      $(buttons[index]).removeClass("inactive")
      $(buttons[index]).addClass("active")
    } else {
      $(buttons[index]).removeClass("active")
      $(buttons[index]).addClass("inactive")
    }
  })
}

insertTabInformation = (target) => {
  if ($(this).width() > 500) {
    $('.accordian section').empty();
    $('.accordian section').append( `      
      <div class="image"></div>
      <div class="info-cont">
        <h3 id="title">Harry Potter and the Sorcerer's Stone</h3>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
           nonummy nibh euismod tincidunt ut laoreet dolore magna
           aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
           exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
           commodo consequat.
           Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
           molestie consequat, vel illum dolore eu feugiat nulla facilisis at
           vero eros et accumsan et iusto odio dignissim qui blandit.
        </p>
      </div>`);
  } else {
    $('.accordian .image').remove(),
    $('.info-cont').remove(),
    $(`button[name=${target.name}]`).after(`      
        <div class="image"></div>
        <div class="info-cont">
          <h3>Lorem ipsum dolor sit amet, consectetue</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
             nonummy nibh euismod tincidunt ut laoreet dolore magna
             aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
             exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
             commodo consequat.
             Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
             molestie consequat, vel illum dolore eu feugiat nulla facilisis at
             vero eros et accumsan et iusto odio dignissim qui blandit.
          </p>
        </div>
    `)
  } 
}

$('nav').on('click', 'button', function (event) {
  changeActiveButton(event.target)
  changeTabInfo(event.target.name)
  insertTabInformation(event.target)
})

$('.flexible').on('click', 'section', function () {
  $(this).hasClass('inactive') ?
    ($(this).removeClass("inactive"),
     $(this).addClass("active")
    )
  : 
    ($(this).removeClass("active"),
     $(this).addClass("inactive")
    )
})

$('.header h3').on('click', (e) => {
  if(!$('.header h3').children().length) {
    $('.header h3').append(`
      <div class="drop-down">    
        <ul>
          <li>Navigation Link 1</li>
          <li>Navigation Link 2</li>
          <li>Navigation Link 3</li>
        </ul>
        <div class="search">
          <i class="fas fa-search search-icon"></i>
          <input id="search-input" type="text">
        </div>
      </div>`
    )
  } else if (e.target.id === 'search-input') {
  } else {
    $('.header h3').children().first().remove();
  }
})

$('.header h3').on('click', 'li', () => {
  console.log('li')
})