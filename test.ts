import { apiFetch } from '@/shared/api';
import { RepoDiff } from '@/widgets/review-submission/ui/ReviewDiff/ReviewMockRepository';
import { ReviewSubmissionClient } from '@/widgets/review-submission/ui/ReviewSubmissionClient/ReviewSubmissionClient';

import type { User } from '@/shared/types/user';

interface ReviewSubmissionProps {
    params: {
        submissionId: string;
    };
}
