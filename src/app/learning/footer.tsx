import * as React from 'react';

function Footer() {
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-20 pb-12 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-4 w-full max-w-[1200px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="flex gap-4 self-start py-0.5 text-xl font-semibold tracking-normal whitespace-nowrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6e395050cf09467ebaca8ee78f419be6c4cd29c1171f6346b999e608c797a8f?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&"
                    className="shrink-0 w-10 aspect-[1.08]"
                  />
                  <div className="my-auto">NAMD</div>
                </div>
                <div className="mt-5 text-lg tracking-wide leading-9">
                  A joint venture is an application to collect fees from an agreed plan
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-base leading-4 text-white max-md:mt-10">
                      <div className="text-lg font-bold leading-6">Teaching</div>
                      <div className="mt-6">Help Center</div>
                      <div className="mt-6">Become a Teacher</div>
                      <div className="mt-6">About us</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center text-base leading-4 text-white max-md:mt-10">
                      <div className="text-lg font-bold leading-6">Community</div>
                      <div className="mt-6">Team Plan</div>
                      <div className="mt-6">Refer a Friend</div>
                      <div className="mt-6">Scholarships</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center text-base leading-4 text-white max-md:mt-10">
                      <div className="text-lg font-bold leading-6">Subscribe</div>
                      <div className="mt-6">Subscribe to get latest offer</div>
                      <div className="flex gap-5 justify-between py-1.5 pr-1 pl-4 mt-5 rounded-lg bg-slate-50 text-zinc-800 text-opacity-80">
                        <div className="my-auto">Email Address</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/431d472b78ce6efc79d39d61f25f53ad6e0a654e598c78c76eb7f702efbc19ac?apiKey=fdbe6fb7be944a1d847f7bc1bd8fd4c0&"
                          className="shrink-0 w-10 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-20 w-full text-base text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="font-medium leading-[140%]">
            © Copyright 2022 hotel. All rights reserved.
          </div>
          <div className="flex gap-5 my-auto leading-[87.5%]">
            <div>Terms</div>
            <div>Privacy</div>
            <div>Cookie Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
