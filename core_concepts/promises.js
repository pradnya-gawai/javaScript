/*
In general programming, a Promise is a concept that represents a placeholder for a value that may not be available yet but will be resolved at some point in the future. It's a way to handle asynchronous operations without blocking the program's execution.
Key Characteristics of a Promise:
Pending State: Initially, the promise is in a pending state, meaning the operation hasn't completed yet.
Fulfilled State: If the asynchronous operation is successful, the promise is fulfilled with a resolved value.
Rejected State: If the operation fails, the promise is rejected with an error or failure reason.
Basic Promise Lifecycle:
Pending: The promise is waiting for the asynchronous task to complete.
Resolved (Fulfilled): The task is completed successfully, and the promise is resolved with a value.
Rejected: The task failed, and the promise is rejected with a reason (error).
Analogy:
Think of a promise like an "IOU" from a friend. When they give you the IOU, you don't have the money yet, but they promise to pay you later. Once they pay you, the promise is fulfilled. If they can't pay for some reason, the promise is rejected.

Example in Real Life:
Let's say you order food online:

The order is placed (the promise is pending).
If the delivery is successful, the food arrives (the promise is fulfilled).
If there's a problem and the food can't be delivered, you'll be informed of the failure (the promise is rejected).
Importance in Programming:
Promises provide a clean way to manage asynchronous operations, making it easier to avoid "callback hell" (deeply nested callback functions) and handle asynchronous tasks like network requests, file reading, or timers in a more structured manner.

In programming, Promises abstract away the complexities of asynchronous tasks, helping to keep code more readable and manageable when dealing with uncertain timing of events. */
