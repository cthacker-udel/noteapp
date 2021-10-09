export const savenoteevent = (filename: string, contents: string): void => {
	localStorage.setItem(filename, contents);
};
