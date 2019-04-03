<template>
  <div>
    <div v-if="info" class="detail">
      <h1>{{info.title}}</h1>
      <el-row>
        <el-col :span="5">
          <time>发表于: {{info.time}}</time>
        </el-col>
        <el-col :span="5">
          <span class="cate">标签: {{info.cate}}</span>
        </el-col>
        <el-col :span="14">
          <div class="collect alignRight">
            <span @click="save">
              <i class="fa fa-bookmark-o"></i>添加收藏
            </span>
          </div>
        </el-col>
      </el-row>
      <p>{{info.content}}</p>
      <el-row class="idea">
        <el-col :span="12">
          <div class="read alignLeft">
            <span>
              <i class="fa fa-book"></i>100
            </span>
            <span>
              <i class="fa fa-heart-o"></i>10
            </span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="read alignRight">
            <el-button icon="el-icon-edit" size="mini" @click="comArea">发表评论</el-button>
          </div>
        </el-col>
      </el-row>
      <ul class="neighbor">
        <li><a href="#">上一篇: 从零开始学架构（一）：架构师成长路径</a></li>
        <li><a href="#">下一篇: 大型网站架构系列：分布式消息队列（一）</a></li>
      </ul>
      <div class="comment" v-show="showComArea">
        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea" resize="none"></el-input>
      </div>
      <ul class="review">
        <li>
          <div
            class="con"
          >都是广告， 全是呐喊型的理论。 没一点实践的说法。都是广告， 全是呐喊型的理论。 没一点实践的说法。都是广告， 全是呐喊型的理论。 没一点实践的说法。都是广告， 全是呐喊型的理论。 没一点实践的说法。都是广告， 全是呐喊型的理论。 没一点实践的说法。都是广告， 全是呐喊型的理论。 没一点实践的说法。</div>
          <div class="declare">
            <span>
              <i class="fa fa-thumbs-o-up"></i>10
            </span>
            <span>
              <i class="fa fa-thumbs-o-down"></i>10
            </span>
          </div>
          <div class="observer">
            <span>张三</span>
            <time>2019-4-5 10:00:00</time>
          </div>
        </li>
        <li>
          <div class="con">都是广告， 全是呐喊型的理论。 没一点实践的说法。</div>
          <div class="declare">
            <span>
              <i class="fa fa-thumbs-o-up"></i>10
            </span>
            <span>
              <i class="fa fa-thumbs-o-down"></i>10
            </span>
          </div>
          <div class="observer">
            <span>张三</span>
            <time>2019-4-5 10:00:00</time>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      info: '',
      textarea: '',
      showComArea: false
    }
  },
  created () {
    let id = this.$route.params.id
    this.info = this.$store.getters.getDetail(id)[0]
  },
  beforeRouteUpdate (to, from, next) {
    let arr = this.$store.getters.getDetail(Number(to.params.id))[0]
    this.info = arr || ''
  },
  methods: {
    comArea () {
      console.log('show comment')
    },
    save () {
      this.$message(
        {
          message: '添加收藏夹成功!',
          center: true,
          type: 'success',
          duration: 1000
        }
      )
    }
  }
}
</script>
<style scoped>
.detail {
  text-align: left;
  color: #303133;
  font-family: 'Microsoft YaHei', sans-serif;
}

.detail h1 {
  margin: 12px 0 20px;
}

.cate,
.detail time {
  color: #909399;
}

.cate:hover {
  text-decoration: underline;
  cursor: pointer;
}

.collect span {
  font-size: 14px;
  padding: 0 5px;
  color: #909399;
}

.collect span:hover {
  cursor: pointer;
  color: red;
}

.collect span i {
  padding-right: 5px;
}

.idea {
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
}

.read span {
  font-size: 14px;
  padding: 0 5px;
  color: #909399;
}

.read span i {
  padding-right: 5px;
}

.read span:last-child:hover {
  cursor: pointer;
  color: red;
}

.detail > p {
  margin: 30px 0 5px;
  color: #303133;
  font-size: 18px;
  text-indent: 2rem;
  letter-spacing: 1px;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 1.6;
}

.neighbor li {
  padding: 2px 0;
}

.neighbor li a {
  color: royalblue;
}

.neighbor li a:hover {
  color: blue;
}

.review {
  margin-top: 12px;
  border-top: 1px solid #eee;
}

.review li {
  padding: 15px 0;
  position: relative;
  border-bottom: 1px solid #eee;
}

.review li .con {
  font-size: 16px;
  padding: 10px 0;
  line-height: 1.8;
  word-wrap: break-word;
  word-break: break-all;
}

.review .declare {
  position: absolute;
  right: 0;
  bottom: 14px;
}

.review .declare span {
  padding-left: 10px;
  color: #909399;
}

.review .declare span:hover {
  cursor: pointer;
  color: #606266;
}

.review .observer time {
  padding-left: 15px;
  color: blue;
}
</style>
