app.filter('uniqueFilter',function(){
  return function(item,key) {
    var filtered=[];
    if(item!=undefined){
    for(var i=0;i<item.length;i++)
    {
      var newitem=item[i];
      var status=false;
      if(i==0)
      {
        filtered.push(newitem);
      }
      else
      {
        for(var j=0;j<filtered.length;j++)
        {
          var filtereditem=filtered[j];
          if(newitem.specs[key]==filtereditem.specs[key]){
            status=true;
          }
        }
        if(!status)
        {
          filtered.push(newitem);
        }
      }

    }

  }
  return filtered;
};
});
