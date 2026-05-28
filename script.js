const messages = [
  "Connecting to server...",
  "Bypassing firewall...",
  "Accessing database...",
  "Injecting malware...",
  "Stealing passwords...",
  "Downloading secret files...",
  "ACCESS GRANTED",
  "HACK COMPLETE"
];

function startHack(){

  const output = document.getElementById("output");

  output.innerHTML = "";

  let i = 0;

  const interval = setInterval(() => {

    output.innerHTML += messages[i] + "<br>";

    output.scrollTop = output.scrollHeight;

    i++;

    if(i >= messages.length){
      clearInterval(interval);

      alert("SYSTEM HACKED 😈");
    }

  }, 1000);

}