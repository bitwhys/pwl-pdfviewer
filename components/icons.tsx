import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Copy,
  CreditCard,
  EggFried,
  Fingerprint,
  HelpCircle,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  logo: Fingerprint,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  twitter: Twitter,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  brand: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 265.5 38"
      enableBackground="new 0 0 265.5 38"
    >
      <g>
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M201.779,15.391c-1.025,3.434-1.883,6.729-2.908,9.97 c-0.582,1.828-1.219,3.572-2.021,4.681c-0.887,1.246-2.548,2.438-4.541,2.438c-1.414,0-2.797-0.666-2.797-2.133 c0-0.914,0.94-1.772,1.688-1.772c0.443,0,0.666,0.249,0.775,0.442c0.692,1.246,1.356,1.967,1.662,1.967 c0.305,0,0.555-0.416,1.053-2.215c1.162-4.293,2.381-8.752,3.627-13.377h-2.603c-0.194-0.582,0.082-1.302,0.414-1.44h2.604 c0.498-1.606,1.08-3.24,1.91-4.708c1.248-2.243,3.241-4.016,5.982-4.016c2.077,0,2.936,0.997,2.936,2.271 c-0.027,1.357-1.219,2.049-1.771,2.049c-0.443,0-0.664-0.332-0.803-0.803c-0.471-1.772-1.08-2.298-1.44-2.298 s-0.914,0.665-1.522,2.049c-0.805,1.745-1.33,3.628-1.828,5.456h3.156c0.194,0.388,0.027,1.219-0.442,1.44L201.779,15.391 L201.779,15.391z"
        />
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M209.626,28.988c-0.028,0.277-0.249,0.525-0.608,0.555 c-2.188-2.021-3.379-5.566-3.379-8.725c0-4.32,1.717-8.53,4.625-11.465c2.381-2.382,4.43-3.295,5.51-3.794 c0.361,0.027,0.609,0.332,0.527,0.582c-1.718,0.969-3.49,2.687-4.902,4.93c-2.049,3.24-3.352,7.228-3.352,11.383 C208.047,24.891,208.573,27.354,209.626,28.988z"
        />
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M219.616,18.797l0.692,2.188 c0.553,1.718,0.774,1.967,0.996,1.967c0.305,0,0.997-0.887,1.495-1.717c0.222-0.223,0.692-0.194,0.859,0.139 c-0.582,1.938-1.938,4.043-3.712,4.043c-1.219,0-1.772-0.971-2.16-2.104l-0.609-1.855l-1.578,1.91 c-1.246,1.496-2.216,2.05-3.24,2.05c-0.719,0-1.273-0.526-1.273-1.385c0-0.97,0.941-2.409,1.635-2.409 c0.276,0,0.415,0.332,0.609,0.831c0.166,0.388,0.359,0.498,0.581,0.498c0.11,0,0.747-0.443,1.938-1.854l0.887-1.054l-0.832-2.631 c-0.166-0.526-0.387-1.052-0.582-1.052c-0.275,0-0.607,0.166-1.439,1.413c-0.305,0.138-0.691-0.028-0.747-0.333 c0.332-1.135,1.772-3.877,3.821-3.877c0.721,0,1.273,0.637,1.635,1.8l0.637,2.077l0.998-1.191c1.467-1.745,2.465-2.687,3.683-2.687 c0.858,0,1.329,0.748,1.329,1.468c0,1.274-0.637,2.354-1.356,2.354c-0.305,0-0.498-0.277-0.608-0.609 c-0.11-0.36-0.306-0.692-0.664-0.692c-0.36,0-1.137,0.609-2.078,1.689L219.616,18.797z"
        />
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M228.148,6.113c0.026-0.277,0.248-0.526,0.608-0.554 c2.188,2.021,3.379,5.566,3.379,8.724c0,4.32-1.717,8.529-4.625,11.465c-2.383,2.382-4.432,3.296-5.512,3.795 c-0.358-0.027-0.608-0.333-0.526-0.582c1.719-0.97,3.489-2.688,4.902-4.93c2.05-3.24,3.352-7.229,3.352-11.382 C229.727,10.211,229.201,7.747,228.148,6.113z"
        />
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M234.757,18.104V16.11h11.106v1.994H234.757z M234.757,22.093 V20.1h11.106v1.993H234.757z"
        />
        <path
          opacity=".5"
          fill="currentColor"
          enableBackground="new"
          d="M255.555,18.797l0.692,2.188 c0.554,1.718,0.774,1.967,0.997,1.967c0.305,0,0.996-0.887,1.494-1.717c0.223-0.223,0.693-0.194,0.859,0.139 c-0.582,1.938-1.938,4.043-3.712,4.043c-1.219,0-1.772-0.971-2.159-2.104l-0.609-1.855l-1.578,1.91 c-1.246,1.496-2.217,2.05-3.24,2.05c-0.721,0-1.273-0.526-1.273-1.385c0-0.97,0.941-2.409,1.634-2.409 c0.276,0,0.416,0.332,0.608,0.831c0.166,0.388,0.36,0.498,0.582,0.498c0.111,0,0.748-0.443,1.938-1.854l0.886-1.054l-0.83-2.631 c-0.166-0.526-0.389-1.052-0.582-1.052c-0.277,0-0.609,0.166-1.439,1.413c-0.305,0.138-0.692-0.028-0.747-0.333 c0.332-1.135,1.772-3.877,3.821-3.877c0.72,0,1.273,0.637,1.633,1.8l0.639,2.077l0.997-1.191c1.468-1.745,2.465-2.687,3.685-2.687 c0.856,0,1.328,0.748,1.328,1.468c0,1.274-0.638,2.354-1.357,2.354c-0.303,0-0.497-0.277-0.607-0.609 c-0.111-0.36-0.305-0.692-0.666-0.692c-0.359,0-1.135,0.609-2.076,1.689L255.555,18.797z"
        />
        <path
          fill="currentColor"
          d="M6.155,25.027v-1.121h2.583V9.733H6.155V8.611h9.972c1.946,0,3.489,0.438,4.629,1.314 c1.14,0.876,1.711,1.994,1.711,3.354c0,1.36-0.586,2.45-1.757,3.271c-1.171,0.822-2.62,1.233-4.348,1.233h-4.225v6.123h2.583v1.121 c-0.608-0.047-2.035-0.069-4.283-0.069S6.763,24.98,6.155,25.027z M11.998,16.826H15.2c0.491,0,0.933-0.041,1.326-0.123 s0.716-0.175,0.97-0.28c0.253-0.105,0.467-0.261,0.643-0.467c0.176-0.206,0.308-0.394,0.397-0.561 c0.089-0.167,0.154-0.395,0.193-0.684c0.039-0.288,0.062-0.52,0.07-0.695c0.008-0.175,0.012-0.422,0.012-0.742 c0-0.382-0.008-0.672-0.023-0.871c-0.015-0.199-0.051-0.461-0.105-0.789c-0.055-0.327-0.158-0.583-0.31-0.766 s-0.356-0.37-0.613-0.561c-0.257-0.191-0.6-0.331-1.028-0.421c-0.429-0.089-0.931-0.134-1.507-0.134H12v7.094H11.998z"
        />
        <path
          fill="currentColor"
          d="M22.615,22.445c0-2.281,2.575-3.536,7.724-3.762v-0.807c0-1.885-0.85-2.828-2.549-2.828 c-0.631,0-1.215,0.055-1.751,0.164c0.39,0.242,0.585,0.635,0.585,1.18c0,0.476-0.162,0.846-0.485,1.11 c-0.323,0.265-0.703,0.397-1.139,0.397c-0.354,0-0.683-0.132-0.984-0.397c-0.302-0.265-0.453-0.635-0.453-1.11 c0-1.464,1.422-2.201,4.267-2.208c1.713,0,3.016,0.335,3.907,1.005c0.891,0.67,1.337,1.566,1.337,2.688v5.143 c0,0.226,0.016,0.386,0.047,0.479c0.031,0.093,0.158,0.186,0.38,0.273c0.222,0.09,0.566,0.135,1.034,0.135 c0.14,0,0.241,0.008,0.304,0.023c0.062,0.016,0.13,0.062,0.205,0.141c0.074,0.078,0.111,0.205,0.111,0.386 c0,0.257-0.057,0.417-0.169,0.479c-0.113,0.062-0.313,0.094-0.602,0.094h-1.146c-0.592,0-1.071-0.057-1.437-0.17 c-0.366-0.112-0.618-0.28-0.754-0.502c-0.136-0.223-0.22-0.409-0.251-0.562c-0.031-0.151-0.047-0.356-0.047-0.614 c-0.667,1.325-1.823,1.987-3.468,1.987c-0.48,0-0.964-0.035-1.453-0.104c-0.489-0.07-0.99-0.196-1.506-0.381 c-0.516-0.183-0.929-0.466-1.24-0.847C22.771,23.455,22.615,22.991,22.615,22.445z M25.349,22.423c0,0.526,0.222,0.972,0.665,1.335 c0.443,0.364,0.982,0.547,1.617,0.547c0.204,0,0.433-0.033,0.686-0.1s0.546-0.18,0.878-0.338c0.333-0.159,0.606-0.43,0.821-0.811 c0.215-0.382,0.323-0.836,0.323-1.365V19.43c-0.352,0.016-0.684,0.043-0.996,0.083c-0.312,0.038-0.732,0.125-1.259,0.262 s-0.974,0.301-1.341,0.49c-0.367,0.191-0.691,0.477-0.972,0.854S25.349,21.932,25.349,22.423z"
        />
        <path
          fill="currentColor"
          d="M34.908,28.546h1.647V16.487c0-0.444-0.084-0.707-0.251-0.789s-0.633-0.123-1.396-0.123v-1.122l4.23-0.199 v1.18c1.005-0.779,2.212-1.172,3.622-1.18c1.706,0,3.069,0.502,4.09,1.506c1.021,1.004,1.531,2.311,1.531,3.924 c0,1.659-0.555,2.989-1.665,3.987c-1.11,0.998-2.565,1.497-4.364,1.497c-1.169,0-2.189-0.361-3.062-1.087v4.464h1.647v1.121 c-1.34-0.047-2.345-0.07-3.015-0.07s-1.675,0.023-3.015,0.07L34.908,28.546L34.908,28.546z M39.29,22.215 c0,0.241,0.012,0.395,0.035,0.455c0.023,0.062,0.098,0.176,0.222,0.339c0.717,0.863,1.562,1.296,2.536,1.296 c0.88,0,1.64-0.38,2.279-1.139c0.639-0.758,0.958-1.919,0.958-3.482c0-1.432-0.28-2.535-0.841-3.31 c-0.561-0.774-1.262-1.161-2.104-1.161c-1.083,0-1.994,0.377-2.734,1.132c-0.18,0.179-0.283,0.303-0.31,0.374 c-0.027,0.07-0.041,0.214-0.041,0.432V22.215z"
        />
        <path
          fill="currentColor"
          d="M49.321,19.643c0-1.566,0.522-2.868,1.566-3.903c1.044-1.036,2.489-1.554,4.335-1.554 c1.643,0,2.912,0.433,3.809,1.297c0.896,0.896,1.344,2.123,1.344,3.68c0,0.304-0.053,0.488-0.158,0.556 c-0.104,0.065-0.309,0.099-0.613,0.099h-7.221c0,2.931,1.122,4.395,3.365,4.395c0.008,0,0.016,0,0.023,0 c0.758,0,1.441-0.175,2.051-0.525c0.611-0.351,1.037-0.811,1.279-1.379c0.084-0.209,0.162-0.347,0.234-0.408 c0.07-0.062,0.211-0.094,0.422-0.094c0.412,0,0.617,0.141,0.617,0.42c0,0.109-0.045,0.267-0.135,0.469 c-0.09,0.201-0.248,0.451-0.479,0.748c-0.231,0.295-0.516,0.569-0.859,0.822c-0.342,0.254-0.805,0.469-1.39,0.644 c-0.585,0.176-1.235,0.264-1.952,0.264c-1.9,0-3.416-0.515-4.545-1.543C49.885,22.6,49.321,21.27,49.321,19.643z M52.383,19.022 h5.715c-0.078-2.648-1.037-3.973-2.875-3.973c-0.975,0-1.729,0.413-2.268,1.239C52.636,16.787,52.445,17.698,52.383,19.022z"
        />
        <path
          fill="currentColor"
          d="M61.215,25.027v-1.121h1.39V16.51c0-0.444-0.07-0.711-0.212-0.801c-0.141-0.089-0.534-0.134-1.178-0.134 v-1.122l3.973-0.199v2.711c0.641-1.799,1.679-2.703,3.113-2.711c0.656,0,1.233,0.177,1.733,0.532s0.75,0.832,0.75,1.431 c0,0.444-0.155,0.799-0.465,1.063c-0.311,0.265-0.666,0.396-1.065,0.396c-0.4,0-0.756-0.126-1.065-0.38 c-0.311-0.253-0.466-0.613-0.466-1.081c0-0.428,0.159-0.794,0.478-1.098c-0.564,0-1.055,0.156-1.471,0.467 s-0.729,0.719-0.937,1.221c-0.207,0.502-0.36,0.993-0.459,1.472c-0.098,0.479-0.146,0.956-0.146,1.432v4.194h2.08v1.121 c-0.551-0.047-1.599-0.069-3.145-0.069C63.8,24.958,62.83,24.98,61.215,25.027z"
        />
        <path
          fill="currentColor"
          d="M71.624,24.503v-2.606c0-0.304,0.027-0.496,0.082-0.578s0.218-0.123,0.491-0.123 c0.194,0,0.327,0.019,0.396,0.054c0.07,0.035,0.129,0.13,0.176,0.285c0.094,0.334,0.2,0.629,0.321,0.885 c0.121,0.256,0.306,0.547,0.555,0.873s0.592,0.576,1.028,0.751s0.95,0.262,1.543,0.262c1.814,0,2.726-0.6,2.734-1.798 c0-0.335-0.091-0.621-0.271-0.858c-0.181-0.236-0.439-0.424-0.776-0.561c-0.337-0.137-0.612-0.227-0.825-0.268 s-0.478-0.098-0.794-0.166c-0.768-0.144-1.307-0.248-1.615-0.314c-0.309-0.066-0.658-0.185-1.048-0.351 c-0.39-0.167-0.735-0.384-1.04-0.646c-0.639-0.542-0.958-1.208-0.958-2c0-0.493,0.088-0.933,0.264-1.32 c0.175-0.388,0.418-0.691,0.729-0.91c0.312-0.219,0.62-0.396,0.924-0.528s0.65-0.225,1.04-0.276c0.389-0.051,0.675-0.084,0.858-0.1 s0.38-0.024,0.59-0.024c1.005,0,1.812,0.157,2.419,0.47c0.623-0.313,0.981-0.47,1.075-0.47c0.194,0,0.315,0.045,0.362,0.135 c0.047,0.089,0.07,0.271,0.07,0.543v1.905c0,0.304-0.029,0.493-0.088,0.567c-0.059,0.074-0.225,0.111-0.497,0.111 c-0.241,0-0.39-0.033-0.443-0.098c-0.055-0.066-0.09-0.191-0.105-0.376c-0.125-1.327-1.063-1.991-2.816-1.991 c-1.783,0-2.68,0.539-2.688,1.616c0,0.297,0.063,0.549,0.19,0.757c0.126,0.208,0.064,0.271-0.186,0.188 c-0.249-0.082-0.374-0.124-0.373-0.124c0,0,0.936,0.197,2.809,0.59c0.611,0.152,1.251,0.302,1.918,0.448 c0.668,0.146,1.216,0.379,1.646,0.696c0.882,0.698,1.323,1.538,1.323,2.521c0,0.562-0.088,1.056-0.264,1.479 c-0.175,0.425-0.419,0.757-0.73,0.994c-0.311,0.236-0.619,0.433-0.923,0.584c-0.304,0.151-0.654,0.256-1.052,0.311 c-0.398,0.055-0.684,0.09-0.858,0.105c-0.176,0.016-0.376,0.022-0.602,0.022c-1.146,0-2.088-0.257-2.828-0.771l-0.619,0.414 c-0.327,0.236-0.561,0.355-0.701,0.355h-0.012c-0.194,0-0.315-0.047-0.362-0.141C71.646,24.934,71.624,24.76,71.624,24.503z"
        />
        <path
          fill="currentColor"
          d="M85.081,9.733V8.611c0.562,0.046,1.78,0.07,3.657,0.07c2.189,0,3.588-0.023,4.195-0.07v1.122h-2.302 l4.241,10.96l3.249-8.425L97.14,9.733h-2.056V8.611c0.561,0.046,1.783,0.07,3.669,0.07c2.188,0,3.583-0.023,4.183-0.07v1.122 h-2.302l4.242,10.96l4.112-10.692c-0.459-0.179-1.273-0.269-2.441-0.269V8.611c0.576,0.046,1.663,0.07,3.26,0.07 c0.413,0,1.266-0.023,2.559-0.07v1.122c-0.592,0-1.048,0.016-1.367,0.047c-0.366,0.031-0.588,0.076-0.666,0.134 s-0.159,0.189-0.245,0.391l-5.527,14.291c-0.077,0.228-0.169,0.387-0.274,0.479c-0.104,0.094-0.292,0.14-0.561,0.14 s-0.456-0.046-0.561-0.14c-0.105-0.095-0.197-0.253-0.275-0.479l-4.159-10.762l-4.172,10.762c-0.078,0.228-0.169,0.387-0.274,0.479 s-0.292,0.14-0.561,0.14c-0.27,0-0.456-0.046-0.562-0.14c-0.104-0.095-0.196-0.253-0.274-0.479l-5.75-14.863H85.081z"
        />
        <path
          fill="currentColor"
          d="M110.12,19.643c0-1.566,0.521-2.868,1.565-3.903c1.044-1.036,2.489-1.554,4.335-1.554 c1.644,0,2.913,0.433,3.81,1.297c0.896,0.896,1.344,2.123,1.344,3.68c0,0.304-0.053,0.488-0.158,0.556 c-0.104,0.065-0.31,0.099-0.613,0.099h-7.221c0,2.931,1.121,4.395,3.365,4.395c0.007,0,0.016,0,0.023,0 c0.757,0,1.441-0.175,2.051-0.525s1.036-0.811,1.279-1.379c0.084-0.209,0.161-0.347,0.233-0.408 c0.071-0.062,0.212-0.094,0.422-0.094c0.412,0,0.618,0.141,0.618,0.42c0,0.109-0.045,0.267-0.135,0.469 c-0.09,0.201-0.249,0.451-0.479,0.748c-0.23,0.295-0.517,0.569-0.859,0.822c-0.343,0.254-0.806,0.469-1.391,0.644 c-0.584,0.176-1.234,0.264-1.951,0.264c-1.9,0-3.416-0.515-4.545-1.543C110.685,22.598,110.12,21.27,110.12,19.643z M113.182,19.022h5.714c-0.078-2.648-1.036-3.973-2.875-3.973c-0.974,0-1.729,0.413-2.267,1.239 C113.435,16.787,113.243,17.698,113.182,19.022z"
        />
        <path
          fill="currentColor"
          d="M128.855,25.027v-1.121h2.583V9.733h-2.583V8.611c0.607,0.046,2.068,0.07,4.382,0.07 c2.525,0,4.133-0.023,4.826-0.07v1.122h-3.226v14.173h2.466c0.592,0,1.133-0.075,1.618-0.229c0.487-0.152,0.886-0.335,1.192-0.549 c0.308-0.215,0.59-0.503,0.847-0.865c0.258-0.361,0.45-0.678,0.579-0.945c0.128-0.27,0.243-0.619,0.345-1.053 c0.101-0.433,0.163-0.75,0.187-0.958c0.025-0.207,0.063-0.485,0.121-0.835h1.188l-0.791,6.554H128.855z"
        />
        <path
          fill="currentColor"
          d="M144.889,19.816c0-1.644,0.537-2.993,1.612-4.048s2.569-1.583,4.487-1.583c1.9,0,3.392,0.528,4.475,1.583 s1.624,2.405,1.624,4.048c0,1.551-0.532,2.83-1.601,3.839s-2.566,1.514-4.498,1.514c-1.934,0-3.432-0.505-4.499-1.514 S144.889,21.367,144.889,19.816z M147.95,19.549c0,0.475,0.004,0.837,0.012,1.086c0.007,0.249,0.038,0.594,0.093,1.034 s0.146,0.779,0.274,1.017c0.129,0.237,0.3,0.494,0.515,0.767s0.5,0.467,0.858,0.584c0.358,0.116,0.784,0.175,1.28,0.175 c0.494,0,0.92-0.059,1.279-0.175c0.357-0.117,0.646-0.312,0.863-0.584s0.391-0.528,0.516-0.767 c0.123-0.236,0.215-0.576,0.273-1.017s0.092-0.785,0.1-1.034s0.012-0.611,0.012-1.086c0-1.644-0.168-2.739-0.502-3.284 c-0.515-0.81-1.359-1.215-2.535-1.215c-1.278,0-2.158,0.464-2.643,1.391C148.082,16.978,147.95,18.014,147.95,19.549z"
        />
        <path
          fill="currentColor"
          d="M157.148,15.528v-1.122c0.156,0,0.586,0.012,1.291,0.035s1.188,0.035,1.443,0.035 c1.184,0,2.174-0.023,2.969-0.07v1.122h-1.297l3.037,6.533l2.781-5.983c0.077-0.156,0.115-0.253,0.115-0.292 c0-0.171-0.35-0.257-1.051-0.257c-0.03,0-0.062,0-0.094,0v-1.122c1.006,0.047,1.729,0.07,2.174,0.07 c0.653,0,1.285-0.023,1.894-0.07v1.122c-0.701,0-1.151,0.035-1.351,0.105c-0.199,0.07-0.34,0.203-0.427,0.397l-3.973,8.518 c-0.181,0.382-0.476,0.573-0.89,0.573c-0.412,0-0.711-0.199-0.898-0.598l-4.193-8.997L157.148,15.528L157.148,15.528z"
        />
        <path
          fill="currentColor"
          d="M170.521,19.643c0-1.566,0.521-2.868,1.564-3.903c1.044-1.036,2.489-1.554,4.335-1.554 c1.644,0,2.913,0.433,3.81,1.297c0.896,0.896,1.345,2.123,1.345,3.68c0,0.304-0.054,0.488-0.158,0.556 c-0.104,0.065-0.31,0.099-0.612,0.099h-7.222c0,2.931,1.121,4.395,3.365,4.395c0.007,0,0.016,0,0.022,0 c0.758,0,1.441-0.175,2.051-0.525c0.61-0.351,1.037-0.811,1.279-1.379c0.084-0.209,0.161-0.347,0.233-0.408 c0.071-0.062,0.212-0.094,0.422-0.094c0.412,0,0.618,0.141,0.618,0.42c0,0.109-0.045,0.267-0.135,0.469 c-0.09,0.201-0.25,0.451-0.479,0.748c-0.229,0.295-0.517,0.569-0.858,0.822c-0.344,0.254-0.807,0.469-1.392,0.644 c-0.584,0.176-1.233,0.264-1.951,0.264c-1.899,0-3.416-0.515-4.545-1.543C171.085,22.598,170.521,21.27,170.521,19.643z M173.582,19.022h5.714c-0.078-2.648-1.036-3.973-2.875-3.973c-0.974,0-1.729,0.413-2.267,1.239 C173.835,16.787,173.645,17.698,173.582,19.022z"
        />
      </g>
      <g>
        <path
          fill="currentColor"
          d="M182.415,12.038c0.016,0.24,0.072,0.436,0.168,0.588c0.192,0.288,0.532,0.432,1.021,0.432 c0.224,0,0.424-0.032,0.6-0.096c0.352-0.12,0.528-0.336,0.528-0.648c0-0.232-0.072-0.4-0.216-0.504 c-0.152-0.096-0.385-0.18-0.696-0.252l-0.588-0.132c-0.384-0.088-0.656-0.184-0.816-0.288c-0.271-0.176-0.408-0.444-0.408-0.804 c0-0.384,0.134-0.7,0.402-0.948c0.268-0.248,0.649-0.372,1.146-0.372c0.447,0,0.829,0.108,1.146,0.324s0.474,0.564,0.474,1.044 h-0.552c-0.032-0.232-0.096-0.408-0.191-0.528c-0.177-0.224-0.477-0.336-0.9-0.336c-0.344,0-0.59,0.072-0.738,0.216 c-0.147,0.144-0.222,0.312-0.222,0.504c0,0.208,0.084,0.36,0.252,0.456c0.12,0.064,0.38,0.144,0.78,0.24l0.611,0.144 c0.288,0.064,0.513,0.152,0.672,0.264c0.272,0.2,0.408,0.492,0.408,0.876c0,0.48-0.172,0.822-0.516,1.026 c-0.344,0.204-0.748,0.306-1.212,0.306c-0.536,0-0.952-0.136-1.248-0.408c-0.312-0.272-0.464-0.64-0.456-1.104H182.415z M186.027,9.122h0.828l1.235,3.636l1.236-3.636h0.816v4.296h-0.553v-2.532c0-0.088,0.002-0.234,0.007-0.438 c0.004-0.204,0.006-0.422,0.006-0.654l-1.225,3.624h-0.576l-1.235-3.624v0.132c0,0.104,0.002,0.264,0.006,0.48 c0.004,0.216,0.006,0.376,0.006,0.48v2.532h-0.552V9.122z"
        />
      </g>
    </svg>
  ),
  completeMode: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
      <rect
        x="8.5"
        y="11"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
      <rect
        x="8.5"
        y="15"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
      <rect
        x="13"
        y="11"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
    </svg>
  ),
  insertMode: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
        fill="currentColor"
      ></path>
      <rect x="4" y="15" width="3" height="2" rx="1" fill="currentColor"></rect>
      <rect
        x="8.5"
        y="15"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
      <rect
        x="13"
        y="15"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
    </svg>
  ),
  editMode: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <rect x="4" y="3" width="12" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="7" width="12" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="11" width="3" height="2" rx="1" fill="currentColor"></rect>
      <rect x="4" y="15" width="4" height="2" rx="1" fill="currentColor"></rect>
      <rect
        x="8.5"
        y="11"
        width="3"
        height="2"
        rx="1"
        fill="currentColor"
      ></rect>
      <path
        d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
}
