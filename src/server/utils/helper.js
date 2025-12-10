// Source - https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
// Posted by Sky Sanders, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-05, License - CC BY-SA 4.0

export function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  export function labelFuture(date) {

    const startOfDay = new Date(new Date().toDateString());
    var seconds = Math.floor((date - startOfDay) / 1000);

    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return "in " + Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return "in " + Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      if (Math.floor(interval) === 1) {
        return "Tomorrow"
      }
      return "in " + Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return "in " + Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return "in " + Math.floor(interval) + " minutes";
    }
    return "in " + Math.floor(seconds) + " seconds";
  }

// Source - https://stackoverflow.com/questions/43008354/get-all-days-of-the-week-given-a-day
// Posted by Joe Pi, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-08, License - CC BY-SA 3.0

export function daysOfWeek(current) {
  var week= new Array(); 
  // Starting Monday not Sunday
  current.setDate((current.getDate() - current.getDay() +1));
  for (var i = 0; i < 7; i++) {
      week.push(
          new Date(current)
      ); 
      current.setDate(current.getDate() +1);
  }
  return week; 
}

// Source - https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
// Posted by Wilt, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-25, License - CC BY-SA 4.0
export function transformFormData(formdata) {
  var object = {};
        formdata.forEach((value, key) => {
            // Reflect.has in favor of: object.hasOwnProperty(key)
            if(!Reflect.has(object, key)){
                object[key] = value;
                return;
            }
            if(!Array.isArray(object[key])){
                object[key] = [object[key]];    
            }
            object[key].push(value);
        });
  return object;
}