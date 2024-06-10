
import AdComponent from "@/components/ad-item";
import { useEffect, useState } from "react";
import axios from "axios";
import { SkeletonCard } from "./skeleton-card";

const Ads = () => {
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchFriendsPost() {
        try {
            const response = await axios.post("/api/ads/getads");
            setAds(response.data.ads);
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        fetchFriendsPost();
    }, []);

    if (isLoading) {
        return <SkeletonCard />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ads?.map((ad: any) => (
                <AdComponent key={ad.adId} {...ad} />
            ))}
        </div>
    )
}

export default Ads