#  Key Pressed Display
## solution code 

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Key</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "SPACE" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table>
    </div>`;
});
```