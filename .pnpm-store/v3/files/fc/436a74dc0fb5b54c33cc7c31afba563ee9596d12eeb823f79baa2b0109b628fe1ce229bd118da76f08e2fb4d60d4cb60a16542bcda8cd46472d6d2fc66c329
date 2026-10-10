import { isLinkAbsolute, isLinkWithProtocol } from "@vuepress/helper/client";
import { useRoute, useRouter } from "vuepress/client";
const FAKE_HOST = "http://.";
export const useNavigate = () => {
    const router = useRouter();
    const route = useRoute();
    return (url) => {
        if (!url)
            return;
        // Outer url
        if (isLinkWithProtocol(url))
            return window.open(url);
        // Inner absolute path
        if (isLinkAbsolute(url)) {
            if (route.fullPath === url)
                return;
            return void router.push(url);
        }
        // Inner relative path
        const loc = route.path.slice(0, route.path.lastIndexOf("/"));
        return void router.push(new URL(`${loc}/${encodeURI(url)}`, FAKE_HOST).pathname);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTmF2aWdhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xpZW50L2NvbXBvc2FibGVzL3VzZU5hdmlnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBNEIsRUFBRTtJQUN2RCxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztJQUV6QixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDYixJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFFakIsWUFBWTtRQUNaLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJELHNCQUFzQjtRQUN0QixJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3hCLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxHQUFHO2dCQUFFLE9BQU87WUFFbkMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELHNCQUFzQjtRQUN0QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3RCxPQUFPLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==