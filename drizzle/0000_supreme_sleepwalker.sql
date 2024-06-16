CREATE TABLE `novels_chapters` (
	`title` text NOT NULL,
	`content` text NOT NULL,
	`number` integer NOT NULL,
	`volume` integer NOT NULL,
	`novel_id` integer NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL,
	FOREIGN KEY (`novel_id`) REFERENCES `novels`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `novels` (
	`title` text NOT NULL,
	`synopsis` text NOT NULL,
	`cover_path` text NOT NULL,
	`genres` ARRAY DEFAULT '[]' NOT NULL,
	`authors` ARRAY DEFAULT '[]' NOT NULL,
	`artists` ARRAY DEFAULT '[]' NOT NULL,
	`custom_preferences` JSON DEFAULT '{}' NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` TIMESTAMP NOT NULL,
	`updated_at` TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `novels_id_unique` ON `novels_chapters` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `novels_id_unique` ON `novels` (`id`);