import type { Metadata } from "next";
import { Notice } from "@/components/notice";
import { PageHero, Section } from "@/components/section";
import { authorities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Authorities explained",
};

export default function AuthoritiesPage() {
  return (
    <>
      <PageHero
        kicker="Authorities"
        title="DHA, DOH, MOHAP and optional SCFHS — compared in plain language."
        description="Use this as orientation. Published rules change. Only the authority can classify you or issue a licence."
      />
      <Section>
        <Notice className="mb-8">
          Official licences are issued only by DHA, DOH, MOHAP, SCFHS or other relevant authorities. MedLicense Hub does not issue licences.
        </Notice>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-navy-deep">
              <tr>
                <th className="px-4 py-3 font-semibold">Authority</th>
                <th className="px-4 py-3 font-semibold">Where it applies</th>
                <th className="px-4 py-3 font-semibold">What to keep in mind</th>
              </tr>
            </thead>
            <tbody>
              {authorities.map((row) => (
                <tr key={row.id} className="border-t">
                  <td className="px-4 py-4">
                    <p className="font-semibold">{row.name}</p>
                    <p className="text-muted-foreground">{row.fullName}</p>
                  </td>
                  <td className="px-4 py-4 text-slate-700">{row.region}</td>
                  <td className="px-4 py-4 text-slate-700">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
