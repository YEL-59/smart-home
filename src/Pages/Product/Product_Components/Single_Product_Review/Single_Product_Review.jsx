

const Single_Product_Review = () => {
  return (
    <>
      <section className="h-[10rem]">
        <div>
          <div className="flex mt-4 border-2 rounded-md p-4">
            <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
              <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="" />
            </div>

            <div className="ml-3">
              <div className="font-medium text-purple-800">John Doe</div>
              <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
              <div className="mt-2 text-purple-800">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Single_Product_Review
