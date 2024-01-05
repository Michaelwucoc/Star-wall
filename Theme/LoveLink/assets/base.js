//基础
var jumpUrl
var apiAjax0

const apiUrlCardsAdd = '/api/Cards/add'//添加卡
const apiUrlCardsGood = '/api/Cards/good'//添加卡
const apiUrlCardsCommentsAdd = '/api/CardsComments/add'//添加评论
const apiUrlUploadImage = '/api/upload/image'//图片上传

//默认添加卡片上传图片个数
const DefSetCardsImgNum = 9;
//默认添加卡片标签个数
const DefSetCardsTagNum = 3;

/*
*API请求函数
*/
function apiAjax0(data, url, type = 'GET', dataType = 'json') {
    //设置公共变量
    var data;
    $.ajax({
        url: url,
        type: type,
        async: false,
        dataType: dataType,
        data: data,

        beforeSend: function () {//提交数据前执行判断，根据返回t/f决定是否发送
            return true;
        },

        success: function (result, status) {
            if (result.ec == '200') {
                //成功
                data = result;
                return;
            } else {
                //失败
                data = false;
                var arrData = result.data;
                var reuData = '';
                //整理二维数组
                for (let index in arrData) {
                    reuData = reuData + arrData[index] + '&nbsp;';
                }
                //详细输出
                reuData = '<br>' + result.ec + '&nbsp;:&nbsp;' + reuData;
                snackbar({
                    message: 'msg&nbsp;:&nbsp;' + result.msg + reuData,
                    position: 'left-top'
                });
                return;
            }
        },

        error: function () {
            data = false;
            snackbar({
                message: '4XX&nbsp;:&nbsp;未知错误，数据获取失败',
                position: 'left-top'
            });
            return;
        }
    })
    //返回公共变量
    return data;
}
function apiAjax0a(data, url, type = 'GET', snackbar = true, dataType = 'json') {
    //设置公共变量
    var data;
    var state;
    $.ajax({
        url: url,
        type: type,
        async: false,
        dataType: dataType,
        data: data,

        beforeSend: function () {//提交数据前执行判断，根据返回t/f决定是否发送
            return true;
        },

        success: function (result, status) {
            if (result.ec == '200') {
                //成功
                data = result;
                state = true;
                return;
            } else {
                //失败
                data = result;
                state = false;
                if (snackbar) {
                    var arrData = result.data;
                    var reuData = '';
                    //整理二维数组
                    for (let index in arrData) {
                        reuData = reuData + arrData[index] + '&nbsp;';
                    }
                    //详细输出
                    reuData = '<br>' + result.ec + '&nbsp;:&nbsp;' + reuData;
                    snackbar({
                        message: 'msg&nbsp;:&nbsp;' + result.msg + reuData,
                        position: 'left-top'
                    });
                }
                return;
            }
        },

        error: function () {
            data = result;
            state = false;
            if (snackbar) {
                snackbar({
                    message: '4XX&nbsp;:&nbsp;未知错误，数据获取失败',
                    position: 'left-top'
                });
            }
            return;
        }
    })
    //返回公共变量
    return {
        'state': state,
        'r': data
    };
}
/*
*API请求函数-文件上传
*/
function apiAjax1(data, url, type = 'GET', dataType = 'json') {
    //设置公共变量
    var data;
    $.ajax({
        url: url,
        type: type,
        async: false,
        dataType: dataType,
        data: data,
        contentType: false,
        processData: false,

        beforeSend: function () {//提交数据前执行判断，根据返回t/f决定是否发送
            return true;
        },

        success: function (result, status) {
            if (result.ec == '200') {
                //成功
                data = result;
                return;
            } else {
                //失败
                data = false;
                var arrData = result.data;
                var reuData = '';
                //整理二维数组
                for (let index in arrData) {
                    reuData = reuData + arrData[index] + '&nbsp;';
                }
                //详细输出
                reuData = '<br>' + result.ec + '&nbsp;:&nbsp;' + reuData;
                snackbar({
                    message: 'msg&nbsp;:&nbsp;' + result.msg + reuData,
                    position: 'left-top'
                });
                return;
            }
        },

        error: function () {
            data = false;
            snackbar({
                message: '4XX&nbsp;:&nbsp;未知错误，数据获取失败',
                position: 'left-top'
            });
            return;
        }
    })
    //返回公共变量
    return data;
}

/*
*URL验证
*/
function checkUrl(url) {
    //判断是否为站内URL
    if (url == '') {
        return false;
    }
    if (url.search('storage/image')) {
        return true;
    } else {
        var strRegex = '^((https|http|ftp|rtsp|mms)?://)?'
            + '(([0-9a-z_!~*().&=+$%-]+: )?[0-9a-z_!~*().&=+$%-]+@)?' //ftp的user@
            + '(([0-9]{1,3}.){3}[0-9]{1,3}|'// IP形式的URL- 199.194.52.184
            + '([0-9a-z_!~*()-]+.)*'// 域名- www.
            + '[a-z]{2,6})'//域名的扩展名
            + '(:[0-9]{1,4})?'// 端口- :80
            + '((/?)|(/[0-9a-z_!~*().;?:@&=+$,%#-]+)+/?)$';
        return new RegExp(strRegex).test(url);
    }
}
/*
*URL解析
*/
function urlConversion(path) {
    let matcht = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i
    result = matcht.exec(path);
    if (result == null) {
        return false
    } else {
        return result;
    }
}
/*
*分页按钮
*/
function pager() {
    //获取数据
    pager = $(".pager").find("li");
    pageFirst = pager.eq(0);
    pageLast = pager.eq(1);
    //判断分页按钮状态
    if (pageFirst.attr("class") == "disabled") {
        $("#pageFirst").attr("disabled", "");
    } else {
        $("#pageFirst").attr("jumpUrl", pageFirst.children().attr("href"));
    }

    if (pageLast.attr("class") == "disabled") {
        $("#pageLast").attr("disabled", "");
    } else {
        $("#pageLast").attr("jumpUrl", pageLast.children().attr("href"));
    }
    //翻页按钮初始化
    if (pager.length == 0) {
        $("#pageFirst").remove();
        $("#pageLast").remove();
    } else {
        $("#pageFirst").click(function () {
            jumpUrl($(this).attr("jumpUrl"));
        })
        $("#pageLast").click(function () {
            jumpUrl($(this).attr("jumpUrl"));
        })
    }
}

/*
*跳转
*/
function jumpUrl(url, time = 600) {
    setTimeout(function () {
        window.location.replace(url);
    }, time);
}

/*
*当前URLGet参数获取decodeURI
*/
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


/**
 * 将文本内容复制到剪切板
 * @param str 复制内容
 */
function copyText(str) {
    try {
        navigator.clipboard.writeText(str);
    } catch (err) {
        var state = false;
    }
    if (state == false) {
        snackbar({
            message: '好像出问题了，再试一次',
            position: 'left-top',
        });
        return false;
    } else {
        snackbar({
            message: '复制成功',
            position: 'left-top',
        });
        return true;
    }
}


//初始化标签
function ViewCardsTag(arr) {
    var CardsTagData = JSON.parse(arr);
    for (let i = 0; i < $(".css-cards-primary-subtitle").length; i++) {
        //jq的坑$()取不到class的对象，取回的是数组，要变对象要套个$();
        var tagList = JSON.parse($($(".css-cards-primary-subtitle")[i])[0].attributes[1].value);
        $($(".css-cards-primary-subtitle")[i]).append('Tag：');
        for (let j = 0; j < tagList.length; j++) {
            for (const key in CardsTagData) {
                if (tagList[j] == CardsTagData[key]['id']) {
                    $($(".css-cards-primary-subtitle")[i]).append('<a href="/index/Cards/tag?value=' + CardsTagData[key]['id'] + '">' + CardsTagData[key]['name'] + '</a> ')
                }
            }
        }
    }
}

//跳转至卡片详情
$('.js-jumpurl-cardId').attr('style', 'cursor:pointer;');
$('.js-jumpurl-cardId').click(function () {
    jumpUrl('/index/Cards/card/id/' + $(this).attr('value'), 0);
});

//分享
//获取当前分享URL
var NowSharePageUrl = window.location.protocol + "//" + window.location.host + '/index/Cards/card/id/';
//获取当前唯一分享内容
function GetShareContent() {
    var ShareUrl = NowSharePageUrl + $('#dialog-share').val();
    return content = NowPageShareData['title'] + '\n' + NowPageShareData['content'] + '\n来自' + $('title').text() + '\n' + ShareUrl;
}
//初始化分享按钮
$('.js-Shareurl-cardId').attr('class', 'mdui-icon iconfont mdui-float-right mdui-color-theme-accent css-caard-header-btn-round mdui-m-l-1 js-Shareurl-cardId');
$('.js-Shareurl-cardId').attr('style', 'cursor:pointer;');
$('.js-Shareurl-cardId').click(function () {
    //新建弹窗对象
    var dialogShare = new mdui.Dialog('#dialog-share');
    // //更新分享弹窗CardID
    $('#dialog-share').val($(this).attr('value'));

    //选择数据获取方式
    if ($(this).attr('state') == 'card') {
        //console.log($('#CardDataTitle').text());
        //整理数据
        var cardIdTitle = $('#CardDataTitle').text().trim();
        var cardIdContent = $('#CardDataTag').text().trim() + '\n' + $('#CardDataContent').text().trim();
    } else {
        //取对象
        var thisCardIdP2 = $(this).parent();
        var thisCardIdP1 = $(this).parent().parent();
        //整理数据
        var cardIdTitle = '[' + thisCardIdP2[0]['innerText'].split("\n")[0] + ']-' + thisCardIdP2.next()[0]['innerText'];
        var cardIdContent = thisCardIdP1.siblings().filter('.mdui-typo')[0]['innerText'];
    }

    //打包数据
    NowPageShareData = { title: cardIdTitle, content: cardIdContent };//当前卡片数据

    //更新分享弹窗内容
    $('#dialog-share').find('textarea').text(GetShareContent());

    //弹窗
    dialogShare.open();
});

//分享至微博
$('.js-jumpurl-wb-cardId').click(function () {
    var ShareUrl = 'https://service.weibo.com/share/share.php?url=' + NowSharePageUrl + $('#dialog-share').val() + '&title=' + encodeURI(NowPageShareData['title'] + '\n' + NowPageShareData['content'] + '\n来自' + $('title').text());
    window.open(ShareUrl, '_blank');
});
// //分享至QQ
// $('.js-jumpurl-qq-cardId').click(function () {
// });
// //分享至WX
// $('.js-jumpurl-wx-cardId').click(function () {
// });
//复制分享内容
$('.js-copyurl-cardId').click(function () {
    //整理分享数据
    var content = GetShareContent()
    var state = copyText(content);
    //console.log(state);
    if (!state) {
        //更新为无法复制弹窗/Content
        $(this).attr('style', 'display:none;')
        $('#dialog-share').find("textarea").parent().parent().attr('style', '');
        $('#dialog-share').find("textarea").siblings("div").filter(".mdui-typo-caption-opacity").text('请手动复制分享内容');
        $('#dialog-share').find("textarea").text(content);
    }
});

//点赞
$('.js-Btn-Update-CardsGood').click(function () {
    if ($(this).val() == 'false') {
        return;
    }
    data = {
        'id': $(this).val(),
    };
    //提交数据
    var result = apiAjax0(data, apiUrlCardsGood, 'POST');
    if (result) {
        //成功
        snackbar({
            message: '点赞成功',
            position: 'left-top'
        });
        //$(this).attr('class', 'css-card-actions-good-1 mdui-btn mdui-float-right');
        $(this).val(false);
        $(this).text("已点赞"+result.data.Num);
        return;
    }
});

//历史路由记录
const historyUrl = () => {
    //0级重置
    if ($('#jsParameter').attr('jsPageHierarchy') == 0) {
        $.removeCookie('historyUrl', { path: '/' });
    }

    //历史路径
    var historyUrl = $.cookie('historyUrl');

    if (historyUrl == undefined) {
        historyUrl = [];
    } else {
        historyUrl = JSON.parse(historyUrl);
    }

    if (historyUrl[historyUrl.length - 1] != window.location.href && historyUrl[historyUrl.length - 1] != '') {
        //刷新不计入
        if (historyUrl[historyUrl.length - 2] != window.location.href) {
            //确保不是返回
            historyUrl[historyUrl.length] = window.location.href;
            $.cookie('historyUrl', JSON.stringify(historyUrl), { path: '/' });
        } else {
            //返回清除记录
            historyUrl.pop();
            $.cookie('historyUrl', JSON.stringify(historyUrl), { path: '/' });
        }

    }
}
historyUrl();

//返回来时的路由
//$('.js-jumpurl-BackUp').attr('style', $('.js-jumpurl-BackUp').attr('style') + 'z-index: 99999;');
$('.js-jumpurl-BackUp').click(function () {
    var historyUrl = JSON.parse($.cookie('historyUrl'));
    if (historyUrl[historyUrl.length - 2] != '') {
        window.location.href = historyUrl[historyUrl.length - 2];
    } else {
        return;
    }
});

$(function () {
    /*
    *提示msg
    */
    //读取
    msg = $.cookie('msg');
    //判断
    if (msg != 'undefined' && msg != undefined) {
        data = false;
        snackbar({
            message: msg,
            position: 'left-top'
        });
        //重置
        $.cookie('msg', 'undefined', { path: '/' });
    }
    //初始化-提示
    $('.js-mdui-Tooltip').each(function (index, domEle) {
        $(domEle).attr('mdui-tooltip', "{content:'" + $(domEle).val() + "'}")
    });
});

//瞎搞
function snackbar(options) {
    // 创建弹窗元素
    var snackbar = document.createElement('div');
    snackbar.classList.add('snackbar');

    // 设置弹窗内容
    snackbar.innerHTML = options.message;

    // 设置弹窗位置
    if (options.position === 'left-top') {
        snackbar.style.top = '10px';
        snackbar.style.left = '10px';
    } else if (options.position === 'right-top') {
        snackbar.style.top = '10px';
        snackbar.style.right = '10px';
    } else if (options.position === 'left-bottom') {
        snackbar.style.bottom = '10px';
        snackbar.style.left = '10px';
    } else if (options.position === 'right-bottom') {
        snackbar.style.bottom = '10px';
        snackbar.style.right = '10px';
    }

    // 将弹窗添加到页面中
    document.body.appendChild(snackbar);

    // 定时关闭弹窗
    setTimeout(function () {
        snackbar.remove();
    }, 3000);
}
