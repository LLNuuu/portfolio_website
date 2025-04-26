document.addEventListener('DOMContentLoaded', function () {
   // 1. 获取元素
   const timerEl = document.getElementById('time');
   let startTime = Date.now();

   // 2. 设置定时器
   const interval = setInterval(() => {
      // 3. 计算经过时间（毫秒）
      const elapsedMs = Date.now() - startTime;

      // 4. 转换为时分秒
      const seconds = Math.floor(elapsedMs / 1000) % 60;
      const minutes = Math.floor(elapsedMs / (1000 * 60)) % 60;
      const hours = Math.floor(elapsedMs / (1000 * 60 * 60));

      // 5. 格式化成两位数显示
      const format = (num) => num.toString().padStart(2, '0');

      // 6. 更新元素内容
      timerEl.innerHTML =
         `${format(hours)}:${format(minutes)}:${format(seconds)}`;
   }, 1000); // 每秒更新一次


   // 可选：如果需要停止计时器
   // window.addEventListener('beforeunload', () => clearInterval(interval));
});