export default function CountUpModule() 
{   
  $(document).ready(function(){
    $('.as-number .count').counterUp({
      delay: 5,
      time: 3000
    });
});
}