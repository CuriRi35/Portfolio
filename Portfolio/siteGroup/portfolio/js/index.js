const openCount = 0;
const maxOpenCount = 1;

function Tab(event) {
  if(openCount < maxOpenCount) {
    openCount++;
    window.open(event.target.href, '_new');
  } else {
    // alert('アラート')
  }
  event.preventDefault();
}