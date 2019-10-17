<html>
<head>
<script type="text/javascript">

function img(){

    var firstJan = Math.floor((new Date().setFullYear(new Date().getFullYear(),0,1))/86400000);
    var today = Math.ceil((new Date().getTime())/86400000);
    var dayOfYear = today-firstJan;

    var bgdImage;
    if((dayOfYear+'').length == 1)
    bgdImage = '00'+dayOfYear+'.mp4';
    else if((dayOfYear+'').length == 2)
    bgdImage = '0'+dayOfYear+'.mp4';
    else
    bgdImage = dayOfYear+'.jpg';

    document.getElementById('bla').src = bgdImage;

}
</script>

</head>
<body onload="javascript:img();">

<img id="bla" width="100%" height="100%" />

</body>
</html>