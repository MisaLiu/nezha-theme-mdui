let LANG = {
  Add: "添加",
  Edit: "修改",
  AlarmRule: "报警规则",
  Notification: "通知方式",
  Server: "服务器",
  Monitor: "监控",
  Cron: "计划任务",
}

function toggleDarkMode(button) {
  const body = document.querySelector('body');
  if (body.classList.contains('mdui-theme-layout-auto')) body.classList.remove('mdui-theme-layout-auto');
  if (body.classList.contains('mdui-theme-layout-dark')) {
    body.classList.remove('mdui-theme-layout-dark');
    body.classList.add('mdui-theme-layout-light');
  } else {
    body.classList.remove('mdui-theme-layout-light');
    body.classList.add('mdui-theme-layout-dark');
  }

  setCookie('is_darkmode', body.classList.contains('mdui-theme-layout-dark'));
  button.innerHTML = '<i class="mdui-icon material-icons">' + (body.classList.contains('mdui-theme-layout-dark') ? '&#xe3a9;' : '&#xe3ac;') + '</i>';
}

function updateLang(newLang) {
  if (newLang) {
    LANG = newLang;
  }
}

function readableBytes(bytes) {
  if (!bytes) {
    return '0B'
  }
  var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + sizes[i];
}

function showConfirm(title, content, callFn, extData) {
  mdui.confirm(content, title,
    function(){
      callFn(extData);
    });
}

function logout(id) {
  mdui.$.ajax({
    method: 'POST',
    url: '/api/logout',
    data: JSON.stringify({ id: id }),
    dataType: 'json',
    success: (data) => {
      if (data.code === 200)
      {
        mdui.snackbar({
          message: '注销成功'
        });
      } else {
        mdui.snackbar({
          message: '注销失败 (' + data.code + ':' + data.message + ')'
        });
      }
    },
    error: (err) => {
      mdui.snackbar({
        message: '网络错误'
      });
      console.error(err);
    }
  });
}