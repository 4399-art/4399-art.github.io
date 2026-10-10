import { useBlogCategory } from "@vuepress/plugin-blog/client";
import { inject, provide } from "vue";
export const tagMapSymbol = Symbol.for("tagMap");
/**
 * Inject tagMap
 *
 * @returns tagMap global computed
 */
export const useTagMap = () => {
    const tagMap = inject(tagMapSymbol);
    if (!tagMap)
        throw new Error("useTagMap() is called without provider.");
    return tagMap;
};
/**
 * Provide tagMap
 */
export const setupTagMap = () => {
    const tagMap = useBlogCategory("tag");
    provide(tagMapSymbol, tagMap);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVGFnTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NsaWVudC9jb21wb3NhYmxlcy9ibG9nL3VzZVRhZ01hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFNdEMsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUE0QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFFOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsR0FBYyxFQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVwQyxJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUV4RSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFTLEVBQUU7SUFDcEMsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFrQixLQUFLLENBQUMsQ0FBQztJQUV2RCxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyJ9