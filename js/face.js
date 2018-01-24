/**
 * Created by jiangqian on 2018/1/24.
 * 图片路径和描述均可以改变
 * 通过正则匹配来查询对应的图片
 * 可以通过在后台数据库存字段来存在服务器上，通过此方法来解析，前台展示对应的表情图片
 */
$(function(){
    var faceShow = {
        faceList:[
            {'title':'微笑','url':'weixiao.gif'},
            {'title':'嘻嘻','url':'xixi.gif'},
            {'title':'哈哈','url':'haha.gif'},
            {'title':'可爱','url':'keai.gif'},
            {'title':'可怜','url':'kelian.gif'},
            {'title':'挖鼻','url':'wabi.gif'},
            {'title':'吃惊','url':'chijing.gif'},
            {'title':'害羞','url':'haixiu.gif'},
            {'title':'挤眼','url':'jiyan.gif'},
            {'title':'闭嘴','url':'bizui.gif'},
            {'title':'鄙视','url':'bishi.gif'},
            {'title':'爱你','url':'aini.gif'},
            {'title':'泪','url':'lei.gif'},
            {'title':'偷笑','url':'touxiao.gif'},
            {'title':'亲亲','url':'qinqin.gif'},
            {'title':'生病','url':'shengbing.gif'},
            {'title':'太开心','url':'taikaixin.gif'},
            {'title':'白眼','url':'baiyan.gif'},
            {'title':'右哼哼','url':'youhengheng.gif'},
            {'title':'左哼哼','url':'zuohengheng.gif'},
            {'title':'嘘','url':'xu.gif'},
            {'title':'衰','url':'shuai.gif'},
            {'title':'吐','url':'tu.gif'},
            {'title':'哈欠','url':'haqian.gif'},
            {'title':'抱抱','url':'baobao.gif'},
            {'title':'怒','url':'nu.gif'},
            {'title':'疑问','url':'yiwen.gif'},
            {'title':'馋嘴','url':'chanzui.gif'},
            {'title':'拜拜','url':'baibai.gif'},
            {'title':'思考','url':'sikao.gif'},
            {'title':'汗','url':'han.gif'},
            {'title':'困','url':'kun.gif'},
            {'title':'睡','url':'shui.gif'},
            {'title':'钱','url':'qian.gif'},
            {'title':'失望','url':'shiwang.gif'},
            {'title':'酷','url':'ku.gif'},
            {'title':'色','url':'se.gif'},
            {'title':'哼','url':'heng.gif'},
            {'title':'鼓掌','url':'guzhang.gif'},
            {'title':'晕','url':'yun.gif'},
            {'title':'悲伤','url':'beishang.gif'},
            {'title':'抓狂','url':'zhuakuang.gif'},
            {'title':'黑线','url':'heixian.gif'},
            {'title':'阴险','url':'yinxian.gif'},
            {'title':'怒骂','url':'numa.gif'},
            {'title':'互粉','url':'hufen.gif'},
            {'title':'书呆子','url':'shudaizi.gif'},
            {'title':'愤怒','url':'fennu.gif'},
            {'title':'感冒','url':'ganmao.gif'},
            {'title':'心','url':'xin.gif'},
            {'title':'伤心','url':'shangxin.gif'},
            {'title':'猪','url':'zhu.gif'},
            {'title':'熊猫','url':'xiongmao.gif'},
            {'title':'兔子','url':'tuzi.gif'},
            {'title':'OK','url':'ok.gif'},
            {'title':'耶','url':'ye.gif'},
            {'title':'GOOD','url':'good.gif'},
            {'title':'NO','url':'no.gif'},
            {'title':'赞','url':'zan.gif'},
            {'title':'来','url':'lai.gif'},
            {'title':'弱','url':'ruo.gif'},
            {'title':'草泥马','url':'caonima.gif'},
            {'title':'神马','url':'shenma.gif'},
            {'title':'囧','url':'jiong.gif'},
            {'title':'浮云','url':'fuyun.gif'},
            {'title':'给力','url':'geili.gif'},
            {'title':'围观','url':'weiguan.gif'},
            {'title':'威武','url':'weiwu.gif'},
            {'title':'话筒','url':'huatong.gif'},
            {'title':'蜡烛','url':'lazhu.gif'},
            {'title':'蛋糕','url':'dangao.gif'},
            {'title':'发红包','url':'fahongbao.gif'}
        ],
        pBody:true,//是否展示表情框
        init:function(){
            this.itemshow();
            this.handle();
        },
        itemshow:function(){//表情列表展示
            var self = this;
            var html = '';
            for(var i = 0;i<self.faceList.length;i++){
                var item = self.faceList[i];
                html +=' <li class="face-sina-item"  data-title="'+item.title+'"><img src="img/face/'+item.url+'" alt=""></li>'
            }
            $('.face-sina-items').html(html);
        },
        handle:function(){//控制各个优化内容
            var self = this;
            $('.face-logo').on('click',function(){
                if(self.pBody){
                    $('.face-sina-body').show();
                }else{
                    $('.face-sina-body').hide();
                }
                self.pBody = !self.pBody;
            });
            $('.face-sina-item').on('click',function(){
                var title = $(this).data("title");
                var textInner = $('textarea[name="face"]').val();
                textInner+="["+title+"]";
                $('textarea[name="face"]').val(textInner);
            });
            $('.face-showbtn').on('click',function(){
                var cont =  $('textarea[name="face"]').val();
                var pat01 = /\[[\u4e00-\u9fa5]+\]/g;
                var pat02 = /\[[\u4e00-\u9fa5]+\]/;
                var content = cont.match(pat01);
                var str = cont;
                if(content){
                    for(var i=0;i<content.length;i++){
                        for(var j=0;j<self.faceList.length;j++){
                            if("["+self.faceList[j].title +"]" == content[i]){
                                var src = self.faceList[j].url;
                                break;
                            }
                        }
                        str = str.replace(pat02,'<img src="img/face/'+src+'"/>');
                    }
                }
                $('.face-show-box').html(str).show();
            })
        }
    };
    faceShow.init();
})
