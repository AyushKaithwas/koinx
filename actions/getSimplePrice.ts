"use server";

export async function GetSimplePrice({
  ids,
  vs_currencies,
  include_24hr_change,
}: {
  ids: string;
  vs_currencies: string;
  include_24hr_change: boolean;
}) {
  try {
    const response = await fetch(
      `${process.env.api_url}?x_cg_demo_api_key=${process.env.api_key}&ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}
