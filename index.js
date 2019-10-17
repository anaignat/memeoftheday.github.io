<html>
<head>
<script type="text/javascript">

function img(){

    var firstJan = Math.floor((new Date().setFullYear(new Date().getFullYear(),0,1))/86400000);
    var today = Math.ceil((new Date().getTime())/86400000);
    var dayOfYear = today-firstJan;

    var dailyMeme;
    if((dayOfYear+'').length == 1)
    dailyMeme = './memes/+'00'+dayOfYear+'.mp4';
    else if((dayOfYear+'').length == 2)
    dailyMeme = '0'+dayOfYear+'.mp4';
    else
    dailyMeme = dayOfYear+'.jpg';

    dailyMeme = document.getElementById('meme').src;

}
</script>

</head>
<body onload="javascript:img();">

<img id="meme" width="100%" height="100%" />

</body>
</html>