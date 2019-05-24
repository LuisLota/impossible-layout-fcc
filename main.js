function columnize(wrapper,pickSelector){
    const grid = document.querySelector(wrapper);
    console.log(grid);
    // find all the images 

    const picks = Array.from(grid.children).filter(el => el.matches(pickSelector));
    const everythingElse = Array.from(grid.children).filter(el => !el.matches(pickSelector));

    // create left 
    const left = document.createElement('div');
    left.classList.add('left');
    picks.forEach(pick => left.appendChild(pick));

    // create right //
    const right = document.createElement('div');
    right.classList.add('right');
    everythingElse.forEach(el => right.appendChild(el));

    grid.appendChild(left);
    grid.appendChild(right);


    
}

columnize('.wrapper','img');