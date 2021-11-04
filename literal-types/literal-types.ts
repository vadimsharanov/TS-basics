let a: "great" = "great";

type actionType = "gg" | 53 | 52;

function trial(action: actionType | SomeAction) {
  if (action === 52) {
    console.log("hello");
  } else {
    console.log("Nea");
  }
}

trial(53);

interface SomeAction {
  s: string;
}
