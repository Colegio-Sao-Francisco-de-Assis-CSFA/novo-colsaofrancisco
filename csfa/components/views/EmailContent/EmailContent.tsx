import { Section, Text, Link, Img } from "@react-email/components";

interface EmailContentProps {
  link: string;
}

export function EmailContent({ link }: EmailContentProps) {
  return (
    <Section className="my-[16px] text-center">
      <Section className="inline-block w-full max-w-[250px] text-left align-top">
        <Text className="m-0 text-[16px] font-semibold leading-[24px] text-indigo-600">
          Link Mágico - verificação de acesso
        </Text>
        <Text className="m-0 mt-[8px] text-[20px] font-semibold leading-[28px] text-gray-900">
          Acesso ao Sistema liberado
        </Text>
        <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
          Acesse o link abaixo para acessar o sistema.
        </Text>
        <Link className="text-indigo-600 underline" href={link}>
          {link}
        </Link>
      </Section>
      <Section className="my-[8px] inline-block w-full max-w-[220px] align-top">
        <Img
          alt="Logo"
          className="rounded-[8px] object-cover"
          height={220}
          src="/logo.webp"
          width={220}
        />
      </Section>
    </Section>
  );
}
