/**
 * Created by jiangqian on 2018/1/24.
 * ͼƬ·�������������Ըı�
 * ͨ������ƥ������ѯ��Ӧ��ͼƬ
 * ����ͨ���ں�̨���ݿ���ֶ������ڷ������ϣ�ͨ���˷�����������ǰ̨չʾ��Ӧ�ı���ͼƬ
 */
$(function(){
    var faceShow = {
        faceList:[
            {'title':'΢Ц','url':'weixiao.gif'},
            {'title':'����','url':'xixi.gif'},
            {'title':'����','url':'haha.gif'},
            {'title':'�ɰ�','url':'keai.gif'},
            {'title':'����','url':'kelian.gif'},
            {'title':'�ڱ�','url':'wabi.gif'},
            {'title':'�Ծ�','url':'chijing.gif'},
            {'title':'����','url':'haixiu.gif'},
            {'title':'����','url':'jiyan.gif'},
            {'title':'����','url':'bizui.gif'},
            {'title':'����','url':'bishi.gif'},
            {'title':'����','url':'aini.gif'},
            {'title':'��','url':'lei.gif'},
            {'title':'͵Ц','url':'touxiao.gif'},
            {'title':'����','url':'qinqin.gif'},
            {'title':'����','url':'shengbing.gif'},
            {'title':'̫����','url':'taikaixin.gif'},
            {'title':'����','url':'baiyan.gif'},
            {'title':'�Һߺ�','url':'youhengheng.gif'},
            {'title':'��ߺ�','url':'zuohengheng.gif'},
            {'title':'��','url':'xu.gif'},
            {'title':'˥','url':'shuai.gif'},
            {'title':'��','url':'tu.gif'},
            {'title':'��Ƿ','url':'haqian.gif'},
            {'title':'����','url':'baobao.gif'},
            {'title':'ŭ','url':'nu.gif'},
            {'title':'����','url':'yiwen.gif'},
            {'title':'����','url':'chanzui.gif'},
            {'title':'�ݰ�','url':'baibai.gif'},
            {'title':'˼��','url':'sikao.gif'},
            {'title':'��','url':'han.gif'},
            {'title':'��','url':'kun.gif'},
            {'title':'˯','url':'shui.gif'},
            {'title':'Ǯ','url':'qian.gif'},
            {'title':'ʧ��','url':'shiwang.gif'},
            {'title':'��','url':'ku.gif'},
            {'title':'ɫ','url':'se.gif'},
            {'title':'��','url':'heng.gif'},
            {'title':'����','url':'guzhang.gif'},
            {'title':'��','url':'yun.gif'},
            {'title':'����','url':'beishang.gif'},
            {'title':'ץ��','url':'zhuakuang.gif'},
            {'title':'����','url':'heixian.gif'},
            {'title':'����','url':'yinxian.gif'},
            {'title':'ŭ��','url':'numa.gif'},
            {'title':'����','url':'hufen.gif'},
            {'title':'�����','url':'shudaizi.gif'},
            {'title':'��ŭ','url':'fennu.gif'},
            {'title':'��ð','url':'ganmao.gif'},
            {'title':'��','url':'xin.gif'},
            {'title':'����','url':'shangxin.gif'},
            {'title':'��','url':'zhu.gif'},
            {'title':'��è','url':'xiongmao.gif'},
            {'title':'����','url':'tuzi.gif'},
            {'title':'OK','url':'ok.gif'},
            {'title':'Ү','url':'ye.gif'},
            {'title':'GOOD','url':'good.gif'},
            {'title':'NO','url':'no.gif'},
            {'title':'��','url':'zan.gif'},
            {'title':'��','url':'lai.gif'},
            {'title':'��','url':'ruo.gif'},
            {'title':'������','url':'caonima.gif'},
            {'title':'����','url':'shenma.gif'},
            {'title':'��','url':'jiong.gif'},
            {'title':'����','url':'fuyun.gif'},
            {'title':'����','url':'geili.gif'},
            {'title':'Χ��','url':'weiguan.gif'},
            {'title':'����','url':'weiwu.gif'},
            {'title':'��Ͳ','url':'huatong.gif'},
            {'title':'����','url':'lazhu.gif'},
            {'title':'����','url':'dangao.gif'},
            {'title':'�����','url':'fahongbao.gif'}
        ],
        pBody:true,//�Ƿ�չʾ�����
        init:function(){
            this.itemshow();
            this.handle();
        },
        itemshow:function(){//�����б�չʾ
            var self = this;
            var html = '';
            for(var i = 0;i<self.faceList.length;i++){
                var item = self.faceList[i];
                html +=' <li class="face-sina-item"  data-title="'+item.title+'"><img src="img/face/'+item.url+'" alt=""></li>'
            }
            $('.face-sina-items').html(html);
        },
        handle:function(){//���Ƹ����Ż�����
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
