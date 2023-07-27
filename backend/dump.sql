CREATE TABLE express_react_todo.task (
	id INT auto_increment NOT NULL,
	content TEXT NOT NULL,
	status BOOL DEFAULT false NOT NULL,
	CONSTRAINT task_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;