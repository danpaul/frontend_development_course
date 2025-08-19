// ========================================
// JavaScript Asynchronous Programming Demo
// ========================================

console.log("⚡ JavaScript Asynchronous Programming Demo\n");

// ========================================
// 1. Callbacks
// ========================================

console.log("1️⃣ Callbacks:");
console.log("=============");

function fetchData(callback) {
  console.log("📞 Fetching data...");
  // Simulate async operation (e.g., API call)
  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    callback(data); // call the callback when done
  }, 1000);
}

fetchData((result) => {
  console.log("✅ Data received:", result);
});

console.log("📝 At the end of the script.");
console.log();

// Wait for the async operation to complete
setTimeout(() => {
  console.log("2️⃣ Callback Hell Example:");
  console.log("=========================");

  // Simulated API functions
  const fetchUser = (userId, callback) => {
    setTimeout(() => {
      callback({ id: userId, name: "Alice" });
    }, 500);
  };

  const fetchUserPosts = (userId, callback) => {
    setTimeout(() => {
      callback([{ id: 1, title: "First Post" }]);
    }, 500);
  };

  const fetchPostComments = (postId, callback) => {
    setTimeout(() => {
      callback([{ id: 1, text: "Great post!", authorId: 2 }]);
    }, 500);
  };

  const fetchCommentAuthor = (authorId, callback) => {
    setTimeout(() => {
      callback({ id: authorId, name: "Bob" });
    }, 500);
  };

  // Callback hell - nested callbacks
  fetchUser(1, (user) => {
    console.log("👤 User:", user.name);
    fetchUserPosts(user.id, (posts) => {
      console.log("📝 Posts:", posts.length);
      fetchPostComments(posts[0].id, (comments) => {
        console.log("💬 Comments:", comments.length);
        fetchCommentAuthor(comments[0].authorId, (author) => {
          console.log("✍️ Author:", author.name);
        });
      });
    });
  });

  console.log();
}, 1500);

// ========================================
// 3. Promises
// ========================================

setTimeout(() => {
  console.log("3️⃣ Promises:");
  console.log("============");

  // Simulated API call
  function fakeApiCall() {
    return new Promise((resolve, reject) => {
      console.log("📞 Calling the server...");

      setTimeout(() => {
        const success = Math.random() > 0.3; // 70% chance of success

        if (success) {
          resolve("🎉 Data received: { user: 'Alice', age: 25 }");
        } else {
          reject("💥 Server error: something went wrong!");
        }
      }, 1000); // wait 1 second to simulate network delay
    });
  }

  // Use the promise
  fakeApiCall()
    .then((data) => {
      console.log("✅ Success:", data);
    })
    .catch((error) => {
      console.error("❌ Error:", error);
    })
    .finally(() => {
      console.log("🔚 API call finished (success or fail).");
    });

  console.log();
}, 3000);

// ========================================
// 4. Promise Chaining
// ========================================

setTimeout(() => {
  console.log("4️⃣ Promise Chaining:");
  console.log("====================");

  // Simulated API functions that return promises
  const fetchUserPromise = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: "Alice" });
      }, 300);
    });
  };

  const fetchUserPostsPromise = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, title: "First Post" }]);
      }, 300);
    });
  };

  const fetchPostCommentsPromise = (postId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, text: "Great post!", authorId: 2 }]);
      }, 300);
    });
  };

  const fetchCommentAuthorPromise = (authorId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: authorId, name: "Bob" });
      }, 300);
    });
  };

  // Promise chaining - much cleaner than callbacks
  fetchUserPromise(1)
    .then((user) => {
      console.log("👤 User:", user.name);
      return fetchUserPostsPromise(user.id);
    })
    .then((posts) => {
      console.log("📝 Posts:", posts.length);
      return fetchPostCommentsPromise(posts[0].id);
    })
    .then((comments) => {
      console.log("💬 Comments:", comments.length);
      return fetchCommentAuthorPromise(comments[0].authorId);
    })
    .then((author) => {
      console.log("✍️ Author:", author.name);
    })
    .catch((error) => {
      console.error("❌ Error:", error);
    });

  console.log();
}, 5000);

// ========================================
// 5. async/await
// ========================================

setTimeout(() => {
  console.log("5️⃣ async/await:");
  console.log("===============");

  // Async function instead of manual promise
  async function getNumber() {
    const num = Math.random();
    if (num > 0.5) {
      return num;
    } else {
      throw "Number too small";
    }
  }

  async function run() {
    try {
      const result = await getNumber();
      console.log("✅ Success:", result);
    } catch (error) {
      console.error("❌ Error:", error);
    }
  }

  run();

  console.log();
}, 7000);

// ========================================
// 6. Converting Callback Hell to async/await
// ========================================

setTimeout(() => {
  console.log("6️⃣ Converting Callback Hell to async/await:");
  console.log("===========================================");

  // Async version of the API functions
  const fetchUserAsync = async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: "Alice" });
      }, 200);
    });
  };

  const fetchUserPostsAsync = async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, title: "First Post" }]);
      }, 200);
    });
  };

  const fetchPostCommentsAsync = async (postId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, text: "Great post!", authorId: 2 }]);
      }, 200);
    });
  };

  const fetchCommentAuthorAsync = async (authorId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: authorId, name: "Bob" });
      }, 200);
    });
  };

  // Async/await version - much cleaner!
  async function getAuthorInfo(userId) {
    try {
      const user = await fetchUserAsync(userId);
      console.log("👤 User:", user.name);

      const posts = await fetchUserPostsAsync(user.id);
      console.log("📝 Posts:", posts.length);

      const comments = await fetchPostCommentsAsync(posts[0].id);
      console.log("💬 Comments:", comments.length);

      const author = await fetchCommentAuthorAsync(comments[0].authorId);
      console.log("✍️ Author:", author.name);

      return author;
    } catch (error) {
      console.error("❌ Error:", error);
    }
  }

  getAuthorInfo(1);

  console.log();
}, 9000);

// ========================================
// 7. Practice Exercise
// ========================================

setTimeout(() => {
  console.log("7️⃣ Practice Exercise:");
  console.log("=====================");

  // Create a function that simulates loading user data
  async function loadUserData(userId) {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (userId === 1) {
      return { id: 1, name: "Alice", email: "alice@example.com" };
    } else {
      throw new Error("User not found");
    }
  }

  // Use the function with proper error handling
  async function main() {
    try {
      console.log("🔄 Loading user data...");
      const user = await loadUserData(1);
      console.log("✅ User loaded:", user);

      console.log("🔄 Loading non-existent user...");
      const invalidUser = await loadUserData(999);
    } catch (error) {
      console.error("❌ Failed to load user:", error.message);
    }
  }

  main();

  console.log();
}, 11000);

// ========================================
// 8. Promise.all() - Running Multiple Promises
// ========================================

setTimeout(() => {
  console.log("8️⃣ Promise.all() - Running Multiple Promises:");
  console.log("=============================================");

  const fetchUserData = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, name: `User ${userId}` });
      }, Math.random() * 1000);
    });
  };

  const fetchUserPosts = (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{ id: 1, title: `Post by User ${userId}` }]);
      }, Math.random() * 1000);
    });
  };

  // Run multiple promises in parallel
  async function fetchUserAndPosts(userId) {
    try {
      const [user, posts] = await Promise.all([
        fetchUserData(userId),
        fetchUserPosts(userId),
      ]);

      console.log("👤 User:", user.name);
      console.log("📝 Posts:", posts.length);

      return { user, posts };
    } catch (error) {
      console.error("❌ Error:", error);
    }
  }

  fetchUserAndPosts(1);

  console.log();
}, 13000);

setTimeout(() => {
  console.log("✅ Async programming demo completed!");
}, 15000);
