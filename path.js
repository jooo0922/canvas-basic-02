'use strict';

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

// beginPath
// 선을 보통 path(경로)라고 하는데, beginPath를 호출하면서 선의 시작을 알려주는 게 좋음.
context.beginPath();

// moveTo
// 얘는 우리가 그림을 그릴 때 어느 위치에서 선을 그어야 할 지 정해야 하니까 '붓을 해당 위치로 옮긴다'라고 생각하면 됨.
// 그림을 실제로 그리는 게 아니야!
context.moveTo(100, 100);

// lineTo
// 얘는 실제로 선을 만드는 것. 그러나 얘를 실행한다고 선이 바로 보이는 건 아니다!
context.lineTo(300, 200);
context.stroke(); // 이걸 해야 선이 눈에 보이도록 그어짐!
// context.fill(); 얘는 지금 당장은 안됨. 우리가 일직선 path밖에 그리지 않았으니까. 색을 채울 영역이 없잖아.
// 그니까 moveTo, lineTo를 이용해서 내가 그을 path를 만들어 낸 다음, 거기에 색을 칠할건지, 선을 그을건지
// stroke() 또는 fill()을 호출해서 물감을 실제로 묻힌다고 생각하면 됨.

// closePath
// path 작성이 끝났으면 닫아주는 역할을 함.
// 일러스트레이터에서 pen tool 쓸 때 보면, 펜툴로 점을 딱딱 찍어서 패스를 만들어 가잖아?
// 이때 패스를 제대로 안끝내고 마우스를 제대로 눌러서 비활성화를 해주지 않으면 다른 곳에 점을 찍으려 할 때
// 갑자기 점들이 길쭉하게 이어지는 경우 있지? 이런 느낌으로 보시면 됨.
// 사실 beginPath()만 잘 써주면 closePath()는 생략해도 되긴 하지만, 어쨋든 이 두 개로 패스의 시작과 끝을 맺는다는 것!
context.closePath();