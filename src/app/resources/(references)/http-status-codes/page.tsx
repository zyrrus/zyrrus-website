import { Card } from "~/app/components/card";
import { BreadcrumbNav } from "~/app/components/navigation/breadcrumb-nav";

export default function HttpStatusCodes() {
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6">
      <BreadcrumbNav
        routes={[{ label: "Resources", href: "/resources" }]}
        page="HTTP Status Codes"
        className=""
      />
      <main className="">
        <h1 className="mt-20 text-2xl font-semibold">HTTP Status Codes</h1>
        <p className="mt-2 text-xl text-secondary">
          A quick reference for developers to decipher server responses or
          refine your own endpoints.
        </p>
        <p className="mt-8">Click on any box to learn more.</p>
        <div className="mt-10 grid grid-cols-5 gap-x-8">
          {/* Information */}
          <StatusCodeGroup
            title="Information"
            code="1xx"
            colorBgBg="bg-gruv-blue-bg"
            colorTextFg="text-gruv-blue-fg"
            colorDarkTextBg="dark:text-gruv-blue-bg"
            items={[
              { code: "100", message: "Continue" },
              { code: "101", message: "Switching Protocols" },
              { code: "102", message: "Processing" },
              { code: "103", message: "Early Hints" },
            ]}
          />

          {/* Success */}
          <StatusCodeGroup
            title="Success"
            code="2xx"
            colorBgBg="bg-gruv-green-bg"
            colorTextFg="text-gruv-green-fg"
            colorDarkTextBg="dark:text-gruv-green-bg"
            items={[
              { code: "200", message: "OK" },
              { code: "201", message: "Created" },
              { code: "202", message: "Accepted" },
              { code: "203", message: "Non-Authoritative Information" },
              { code: "204", message: "No Content" },
              { code: "205", message: "Reset Content" },
              { code: "206", message: "Partial Content" },
              { code: "207", message: "Multi-Status" },
              { code: "208", message: "Already Reported" },
              { code: "226", message: "IM Used" },
            ]}
          />

          {/* Redirect */}
          <StatusCodeGroup
            title="Redirect"
            code="3xx"
            colorBgBg="bg-gruv-yellow-bg"
            colorTextFg="text-gruv-yellow-fg"
            colorDarkTextBg="dark:text-gruv-yellow-bg"
            items={[
              { code: "300", message: "Multiple Choices" },
              { code: "301", message: "Moved Permanently" },
              { code: "302", message: "Found" },
              { code: "303", message: "See Other" },
              { code: "304", message: "Not Modified" },
              { code: "305", message: "Use Proxy" },
              { code: "307", message: "Temporary Redirect" },
              { code: "308", message: "Permanent Redirect" },
            ]}
          />

          {/* Client Error */}
          <StatusCodeGroup
            title="Client Error"
            code="4xx"
            colorBgBg="bg-gruv-orange-bg"
            colorTextFg="text-gruv-orange-fg"
            colorDarkTextBg="dark:text-gruv-orange-bg"
            items={[
              { code: "400", message: "Bad Request" },
              { code: "401", message: "Unauthorized" },
              { code: "402", message: "Payment Required" },
              { code: "403", message: "Forbidden" },
              { code: "404", message: "Not Found" },
              { code: "405", message: "Method Not Allowed" },
              { code: "406", message: "Not Acceptable" },
              { code: "407", message: "Proxy Authentication Required" },
              { code: "408", message: "Request Timeout" },
              { code: "409", message: "Conflict" },
              { code: "410", message: "Gone" },
              { code: "411", message: "Length Required" },
              { code: "412", message: "Precondition Failed" },
              { code: "413", message: "Payload Too Large" },
              { code: "414", message: "URI Too Long" },
              { code: "415", message: "Unsupported Media Type" },
              { code: "416", message: "Range Not Satisfiable" },
              { code: "417", message: "Expectation Failed" },
              { code: "418", message: "I'm a Teapot" },
              { code: "421", message: "Misdirected Request" },
              { code: "422", message: "Unprocessable Entity" },
              { code: "423", message: "Locked" },
              { code: "424", message: "Failed Dependency" },
              { code: "425", message: "Too Early" },
              { code: "426", message: "Upgrade Required" },
              { code: "428", message: "Precondition Required" },
              { code: "429", message: "Too Many Requests" },
              { code: "431", message: "Request Header Fields Too Large" },
              { code: "451", message: "Unavailable For Legal Reasons" },
            ]}
          />

          {/* Server Error */}
          <StatusCodeGroup
            title="Server Error"
            code="5xx"
            colorBgBg="bg-gruv-red-bg"
            colorTextFg="text-gruv-red-fg"
            colorDarkTextBg="dark:text-gruv-red-bg"
            items={[
              { code: "500", message: "Internal Server Error" },
              { code: "501", message: "Not Implemented" },
              { code: "502", message: "Bad Gateway" },
              { code: "503", message: "Service Unavailable" },
              { code: "504", message: "Gateway Timeout" },
              { code: "505", message: "HTTP Version Not Supported" },
              { code: "506", message: "Variant Also Negotiates" },
              { code: "507", message: "Insufficient Storage" },
              { code: "508", message: "Loop Detected" },
              { code: "510", message: "Not Extended" },
              { code: "511", message: "Network Authentication Required" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}

interface StatusCode {
  code: string;
  message: string;
}

interface StatusCodeGroupProps {
  title: string;
  code: string;
  items: StatusCode[];
  colorBgBg: string;
  colorTextFg: string;
  colorDarkTextBg: string;
}

const StatusCodeGroup: React.FC<StatusCodeGroupProps> = ({
  title,
  code,
  items,
  colorBgBg,
  colorTextFg,
  colorDarkTextBg,
}) => {
  return (
    <Card className="flex flex-col gap-y-4 p-4" depth={0}>
      <Card className={`${colorBgBg} rounded-2xl px-4 pb-3 pt-2`} depth={1}>
        <h2 className={`${colorTextFg} text-2xl`}>
          <span className="text-base">{code}</span>
          <br />
          {title}
        </h2>
      </Card>
      {items.map((item, index) => (
        <Card key={index} className="rounded-2xl px-4 py-3" depth={1}>
          <p className="text-lg font-medium text-secondary">
            <span className={`${colorTextFg} ${colorDarkTextBg} text-base`}>
              {item.code}
            </span>
            <br />
            {item.message}
          </p>
        </Card>
      ))}
    </Card>
  );
};
