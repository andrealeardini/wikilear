import { DateTime } from "luxon";

export function getSiblingContent(collection, page) {
  if (!collection || !collection.length) {
    return;
  }

  const today = new Date();

  let previous = null;
  let next = null;

  const posts = collection.filter((item) => {
    return item.date <= today;
  });

  if (posts.length < 2) {
    return;
  }

  for (let i = 0; i < posts.length; i++) {
    const current = posts[i];
    if (current.url === page.url) {
      if (i > 0) {
        previous = posts[i - 1];
      }
      if (i < posts.length - 1) {
        next = posts[i + 1];
      }
      break;
    }
  }

  if (previous || next) {
    return [previous, next];
  }
}

export function currentDate() {
    return new Date();
}

export function currentYear() {
    return new Date().getFullYear();
}
