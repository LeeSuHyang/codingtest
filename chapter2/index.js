var durability = [5, 3, 4, 1, 3, 8, 3];
var dogs = [
  {
    이름: "루비독",
    나이: "95년생",
    점프력: "3",
    몸무게: "4",
  },
  {
    이름: "피치독",
    나이: "95년생",
    점프력: "3",
    몸무게: "3",
  },
  {
    이름: "씨-독",
    나이: "72년생",
    점프력: "2",
    몸무게: "1",
  },
  {
    이름: "코볼독",
    나이: "59년생",
    점프력: "1",
    몸무게: "1",
  },
];

/*
<구현 조건>
1. 독의 몸무게는 내구도 0까지만 가능
2. 각 돌에 독들이 착지할 때 돌의 내구도는 몸무게만큼 감소
3. 독들의 점프력에 따라 이동
*/
function 징검다리를건너라(durability, dogs) {
  let answer = [];
  for (let dog of dogs) {
    let position = 0;
    let fail = false;
    while (position < durability.length) {
      position += parseInt(dog["점프력"], 10);
      durability[position - 1] -= parseInt(dog["몸무게"], 10);

      if (durability[position - 1] < 0) {
        fail = true;
        break;
      }
    }

    if (!fail) {
      answer.push(dog["이름"]);
    }
  }

  return answer;
}

console.log(징검다리를건너라(durability, dogs));
