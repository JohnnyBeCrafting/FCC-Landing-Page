// Global variables go here
let pianoKeys = document.querySelectorAll("div[data-audio]");
let submitBtn = document.getElementById('submit');

// let playBtn = document.getElementById('play-song');

// console.log(playBtn);
console.log(submitBtn);
submitBtn.addEventListener('click', function(){
    this.value = 'Success! 😀';
})
pianoKeys.forEach(function(item){
    item.addEventListener('click', function(e){
        if(e.repeat){
            return;
        }
        let pianoNote = item.getAttribute('data-audio');
        playSound(pianoNote);
    })
})

function playSound(note){
    let sound = document.getElementById(`${note}`)
    sound.currentTime = 0;
    sound.play();
}

// playBtn.addEventListener('click', playPiano);

function playPiano(){
    let initCount = 0;
    let odeToJoey = ['E','E','F', 'G', 'G', 'F', 'E', 'D', 'C', 'C', 'D', 'E', 'D', 'C', 'C'];
    let pianoKeys = document.querySelectorAll('div[data-audio]');
    // find the piano key with the note in array
    playNote(note);
    function playNote(note){
        let odeNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
        initCount++;
    }
    let firstNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // pianoKey.classList.remove('active');
    console.log('yo the firstnote is', firstNote);
    pianoKeys.forEach(function(item){
        item.addEventListener('click', function(){

        })
    })

    firstNote.classList.add('active');

    console.log('AHHH THE ITEM', item.getAttribute('data-audio'));
    // conditional goes here
    if(item.getAttribute('data-audio') === firstNote.getAttribute('data-audio')){
        // continue on ahead to the next note
        nextNote(note);
        alert('yay match');
    }else{
        alert('not the note');
    }
    // click event listener
    // firstNote.addEventListener('click', function(){
    //     alert('yay, you clicked the note', firstNote);
    // })
    // remove the classList proceed to the nxt one.
    // initCount++;
    // let secondNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', secondNote);
    // initCount++;
    // let thirdNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', thirdNote);
    // initCount++;
    // let fourthNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', fourthNote);
    // initCount++;
    // let fifthNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', fifthNote);
    // initCount++;
    // let sixthNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', sixthNote);
    // initCount++;
    // let seventhNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', seventhNote);
    // initCount++;
    // let eigthNote = document.querySelector("[data-audio=" + odeToJoey[initCount] + "]");
    // console.log('yo the firstnote is', eigthNote);
}

