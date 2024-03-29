import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section"


const Howit_Work_Upper_Section = () => {
  return (
    <>
    <section className="container mx-auto flex justify-between gap-10">
    <div className="relative overflow-hidden rounded-lg  p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                   
                    <Secondary_Title_Section secondary_title={'How it works'}/>
                    <p className="text-sm text-muted-foreground">Enhance your creativity with a variety of custom brushes.
                    </p>
                </div>
            </div>
        </div>
   
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2  md:grid-cols-3">
   
        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="">
                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Custom Brushes</h3>
                    <p className="text-sm text-muted-foreground">Enhance your creativity with a variety of custom brushes.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="12" y1="16" x2="16" y2="12"></line>
                    <line x1="12" y1="16" x2="8" y2="12"></line>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Layer Management</h3>
                    <p className="text-sm text-muted-foreground">Efficiently organize your artwork with layer management
                        tools.</p>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                </svg>
                <div className="space-y-2">
                    <h3 className="font-bold">Live Collaboration</h3>
                    <p className="text-sm text-muted-foreground">Work simultaneously with others on the same project in
                        real-time.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}

export default Howit_Work_Upper_Section