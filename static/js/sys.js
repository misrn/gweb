function _SysUserrefresh() {$("#SysUserDiv").show();$("#SysMenuDiv").hide();$("#SysRoleDiv").hide();_Sysrefresh("SysUserInfo")}function _SysMenurefresh() {$("#SysUserDiv").hide();$("#SysMenuDiv").show();$("#SysRoleDiv").hide();_Sysrefresh("SysMenuInfo")}function _SysRolerefresh() {$("#SysUserDiv").hide();$("#SysMenuDiv").hide();$("#SysRoleDiv").show();_Sysrefresh("SysRoleInfo")}function _Sysrefresh(avg) {layer.msg('数据加载中...', {icon: 16, shade: 0.01, time: 0});$.ajax({type: 'post', url: '/sys', data: {"action": avg}, dataType: 'json', success: function (data) {if (data.code != '0'){puberror(data.code,data.msg);return;}var trStr = '';if (avg == "SysUserInfo") {if (data.data.length == 0) {layer.msg("未查询到数据", {icon: 5});} else {for (i = 0; i < data.data.length; i++) {trStr += '<tr> <td><p style="font-weight:bold">' + data.data[i].email + '</p></td> <td>' + data.data[i].username + '</td> <td>' + data.data[i].role_id + '</td> ' ;if (data.data[i].status == "0"){trStr += ' <td><a class="layui-btn layui-btn-radius layui-btn-xs"> 启用 </a></td><td>'}else {trStr += ' <td><a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-danger"> 禁用 </a></td><td>'}trStr += data.data[i].create_time + '</td> <td>' + data.data[i].login_time + '</td>';trStr += '<td><a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-primary"> 详细 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs"> 编辑 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-danger"> 删除 </a>';}$("#SysUserInfo").html(trStr);layer.msg("数据加载完成")}} else if (avg == "SysMenuInfo") {if (data.data.length == 0) {layer.msg("未查询到数据", {icon: 5});} else {for (i = 0; i < data.data.length; i++) {trStr += '<tr> <td><p style="font-weight:bold"> <i class="lnr ' + data.data[i].menu_lcon + '"></i></p></td> <td>' + data.data[i].menu_url + '</td> <td>' + data.data[i].menu_name + '</td><td>' + data.data[i].create_time + '</td><td>' + data.data[i].instruction + '</td>';trStr += '<td><a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-primary"> 详细 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs"> 编辑 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-danger"> 删除 </a>';}$("#SysMenuInfo").html(trStr);layer.msg("数据加载完成")}} else if (avg == "SysRoleInfo") {if (data.data.length == 0) {layer.msg("未查询到数据", {icon: 5});} else {for (i = 0; i < data.data.length; i++) {trStr += '<tr> <td><p style="font-weight:bold">' + data.data[i].role_name + '</p></td> <td>' + data.data[i].create_time + '</td><td>' + data.data[i].instruction + '</td>';trStr += '<td><a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-primary"> 权限维护 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs"> 编辑 </a>' + '<a class="layui-btn layui-btn-radius layui-btn-xs layui-btn-danger"> 删除 </a>';}$("#SysRoleInfo").html(trStr);layer.msg("数据加载完成")}}}});}