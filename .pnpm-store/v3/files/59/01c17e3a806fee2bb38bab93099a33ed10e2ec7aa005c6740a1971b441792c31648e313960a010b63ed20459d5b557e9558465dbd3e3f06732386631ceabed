import { PluginWithOptions } from "markdown-it";

//#region src/options.d.ts
interface MarkdownItTaskListOptions {
  /**
   * Whether disable checkbox
   *
   * 是否禁用 checkbox
   *
   * @default true
   */
  disabled?: boolean;
  /**
   * Whether use `<label>` to wrap text
   *
   * 是否使用 `<label>` 来包裹文字
   *
   * @default true
   */
  label?: boolean;
  /**
   * Class for tasklist container
   *
   * tasklist 容器的 class
   *
   * @default 'task-list-container'
   */
  containerClass?: string;
  /**
   * Class for tasklist item
   *
   * tasklist item 的 class
   *
   * @default 'task-list-item'
   */
  itemClass?: string;
  /**
   * Class for tasklist item label
   *
   * tasklist item label 的 class
   *
   * @default 'task-list-item-label'
   */
  labelClass?: string;
  /**
   * Class for tasklist item checkbox
   *
   * tasklist item checkbox 的 class
   *
   * @default 'task-list-item-checkbox'
   */
  checkboxClass?: string;
}
//#endregion
//#region src/plugin.d.ts
declare const tasklist: PluginWithOptions<MarkdownItTaskListOptions>;
//#endregion
//#region src/types.d.ts
interface TaskListEnv {
  tasklistId: number;
}
//#endregion
export { MarkdownItTaskListOptions, TaskListEnv, tasklist };
//# sourceMappingURL=index.d.ts.map