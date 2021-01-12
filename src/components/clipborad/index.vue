<template>
  <div>
    <div>
      <input type="text" name="username" id="username" />
      <button
        data-clipboard-target="#username"
        data-clipboard-action="copy"
        ref="username"
      >
        copy input content
      </button>
    </div>
    <div>
      <textarea type="text" name="userinfo" id="userinfo" />
      <button
        data-clipboard-target="#userinfo"
        data-clipboard-action="copy"
        ref="userinfo"
      >
        copy textarea content
      </button>
    </div>
    <div>
      <input type="text" name="password" id="password" />
      <button
        data-clipboard-target="#password"
        data-clipboard-action="cut"
        ref="password"
      >
        cut input content
      </button>
    </div>
    <button id="copybtn" data-clipboard-text="hhhhhh zsw">
      copy to clipboard
    </button>
  </div>
</template>
<script>
import clipboard from "clipboard";
export default {
  name: "clipboard",
  data() {
    return {
      _copyUsername: null,
      _copyTextarea: null,
      _cutPassword: null,
      _copyBtn: null,
    };
  },
  mounted() {
    this.initNeedClipboardBtns();
  },
  methods: {
    initNeedClipboardBtns() {
      this.initClipboardBtn(
        "_copyUsername",
        "username",
        (res) => {
          alert("复制成功: " + res.text);
        },
        () => {
          alert("复制失败");
        }
      );
      this.initClipboardBtn(
        "_copyTextarea",
        "userinfo",
        (res) => {
          alert("复制成功: " + res.text);
        },
        () => {
          alert("复制失败");
        }
      );
      this.initClipboardBtn(
        "_cutPassword",
        "password",
        (res) => {
          alert("剪切成功: " + res.text);
        },
        () => {
          alert("剪切失败");
        }
      );
      this.$data._copyBtn = new clipboard(document.getElementById("copybtn"));
      this.$data._copyBtn.on("success", (res) => {
        console.log(res);
        alert("复制成功: " + res.text);
        res.clearSelection();
      });
    },
    initClipboardBtn(name, refName, success, error) {
      this.$data[name] = new clipboard(this.$refs[refName]);
      this.$data[name].on("success", success);
      this.$data[name].on("error", error);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>