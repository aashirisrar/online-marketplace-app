import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const AdsComponentUserPage = ({ adId, image, title, details, price }: any) => {

    async function deleteAd() {
        try {
            const response = await axios.post("/api/ads/deletead", { adId });
        } catch (error) {
            console.error("Error deleting ad", error);
        }
    }


    return (
        <Card className="mb-4">
            <CardContent key={adId} className="grid gap-8">
                <div className="grid gap-4 grid-cols-1">
                    <div className="flex justify-between gap-5 max-sm:flex-col max-sm:items-center">
                        <div className="flex p-1">
                            <Image className="mx-auto" src={image} width={200} height={200} alt={adId} />
                        </div>
                        <div className="flex p-2">
                            <div className="flex flex-col gap-4">
                                <div className="text-md font-medium leading-none">
                                    {title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {details}
                                </div>
                                <div className="text-sm text-primary">
                                    Rs {price}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div onClick={deleteAd} className="hover:bg-secondary p-1 rounded-lg">
                                <Trash2 />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdsComponentUserPage;
